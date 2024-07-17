import {defineStore} from 'pinia';

import {adminAxiosInstance, axiosInstance, userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import router from "@/router";

const $toast = useToast()

export const useUpdatePassword = defineStore('password', {
    state: () => ({
        token: '',
        email: localStorage.getItem('r_u_e') ?? '',
        userType: localStorage.getItem('r_u_t') ?? '',
        cred: {},
        loading: false,
        verified: false
    }),
    actions: {
        async resetPassword(email, userType) {
            this.loading = true;
            localStorage.setItem('r_u_e', email)
            localStorage.setItem('r_u_t', userType)
            this.email = localStorage.getItem('r_u_e')
            this.userType = localStorage.getItem('r_u_t')
            await axiosInstance.post('/api/password-reset-code', {
                email,
                user_type: userType,
            }).then((response) => {
                $toast.success('Verification Code Sent To Your Mail')
                router.push({name: 'two_factor'})
            }).catch((error) => {
                if (error.response && error.response.status === 422) {
                    const errors = error.response.data.errors;
                    for (const field in errors) {
                        if (errors.hasOwnProperty(field)) {
                            $toast.error(errors[field][0]);
                        }
                    }

                } else {
                    $toast.error('Something went wrong!.');
                    console.error('An error occurred:', error);
                }
            })
            this.loading = false;
        },
        async verifyResetCode(code, email = this.email, userType = this.userType) {
            this.loading = true;
            this.token = code;
            await axiosInstance.post('/api/verify-password-reset-code', {
                email,
                user_type: userType,
                token: this.token
            }).then((response) => {
                this.verified = true
                $toast.success('Code Verified')
                router.push({name: 'update_password'});
            }).catch((error) => {
                $toast.error('Something went wrong!')
            })
            this.loading = false;
        },
        async updatePassword(password, code = this.token, email = this.email, userType = this.userType) {
            this.loading = true;
            this.cred = password;
            await axiosInstance.post('/api/password-reset', {
                email,
                user_type: userType,
                token: this.token,
                password: this.cred.password,
                password_confirmation: this.cred.confirm_password,
                verified: this.verified
            }).then((response) => {
                localStorage.removeItem('r_u_e')
                localStorage.removeItem('r_u_t')
                $toast.success('Password Changed')
                router.push({name: 'login'});
            }).catch((error) => {
                $toast.error('Something went wrong!')
            })
            this.loading = false;
        },
        async changeOldPassword(old_password, new_password, userType) {
            this.loading = true;
            if (userType === 'user') {
                await userAxiosInstance.post('/update-password', {
                    old_password,
                    password: new_password.password,
                    password_confirmation: new_password.confirm_password,
                }).then((response) => {
                    $toast.success(response.data.message)
                }).catch((error) => {
                    if (error.response && error.response.status === 422) {
                        const errors = error.response.data.errors;
                        for (const field in errors) {
                            if (errors.hasOwnProperty(field)) {
                                $toast.error(errors[field][0]);
                            }
                        }

                    } else {
                        $toast.error('Something went wrong!')
                    }

                })
                this.loading = false;
            } else {
                adminAxiosInstance.post('/update-password', {
                    old_password,
                    password: new_password.password,
                    password_confirmation: new_password.confirm_password,
                }).then((response) => {
                    $toast.success(response.data.message)
                }).catch((error) => {
                    $toast.error('Something went wrong!')
                })
                this.loading = false;
            }
        }
    }
})