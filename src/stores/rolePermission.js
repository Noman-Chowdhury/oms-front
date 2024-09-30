import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import LeaveTypeTableAction from "@/components/DatatableAction/LeaveTypeTableAction.vue";
import RoleTableAction from "@/components/DatatableAction/RoleTableAction.vue";
import router from "@/router";

const $toast = useToast()

export const useRolePermissionStore = defineStore('role-permission', {
    state: () => ({
        roles: [],
        loading: false,
        role: {
            name: '',
            permissions: []
        },
        roleId: null,
        permissions: []
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/roles')
                .then((response) => {
                    const resData = response.data
                    this.roles = resData.data.lists.map(role => ({
                        ...role,
                        action: {
                            component: shallowRef(RoleTableAction),
                            props: {role}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeData() {
            try {
                await userAxiosInstance.post('/roles', this.role)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.role.name = ''
                        this.role.permissions = []
                        router.push({name: 'roles'});
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
                console.log('Error wile adding :', error)
            }
        },
        async updateData() {
            try {
                await userAxiosInstance.put(`/roles/${this.roleId}`, this.role)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.role.name = ''
                        this.role.permissions = []
                        this.roleId = null
                        router.push({name: 'roles'});
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
                console.log('Error wile adding :', error)
            }
        },
        async deleteData() {
            try {
                await userAxiosInstance.delete(`/roles/${this.roleId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.roleId = null
                    })
            } catch (error) {
                console.log('Error wile adding :', error)
            }
        },
        async showData(roleID) {
            try {
                await userAxiosInstance.get(`/roles/${roleID}`)
                    .then((res) => {
                        const resData = res.data
                        this.role.name = resData.data.info.name
                        this.role.permissions = resData.data.info.permissions.map(permission => (permission.id))
                    })
            } catch (error) {
                console.log('Error wile adding :', error)
            }
        },
        async fetchAllPermissions() {
            try {
                await userAxiosInstance.get(`/permissions`)
                    .then((res) => {
                        const resData = res.data
                        this.permissions = resData.data.permissions
                    })

            } catch (error) {
                console.log('Error wile fetching :', error)
            }
        }
    }
})