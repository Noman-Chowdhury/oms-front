import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import UserTableAction from "@/components/DatatableAction/UserTableAction.vue";

const $toast = useToast()

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        loading: false,
        user: {
            name: '',
            email: '',
            status: 'active'
        },
        userId: null
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/users')
                .then((response) => {
                    const resData = response.data
                    this.users = resData.data.lists.map(user => ({
                        ...user,
                        status: formatStatus(user.status),
                        action: {
                            component: shallowRef(UserTableAction),
                            props: {user}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeData() {
            this.loading = true;
            try {
                await userAxiosInstance.post('/users', this.user)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.user.name = ''
                        this.user.email = ''
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
            } catch (error) {
                console.log('Error wile adding user :', error)
            }
            this.loading = false;
        },
        async updateData() {
            this.loading = true;
            try {
                await userAxiosInstance.put(`/users/${this.userId}`, this.user)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.user.name = ''
                        this.user.email = ''
                        this.userId = null
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
            } catch (error) {
                console.log('Error wile updating user :', error)
            }
            this.loading = false;
        },
        async deleteData() {
            try {
                await userAxiosInstance.delete(`/users/${this.userId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.userId = null
                    })
            } catch (error) {
                console.log('Error wile deleting user :', error)
            }
        }
    }
})