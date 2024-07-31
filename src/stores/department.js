import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import DepartmentTableAction from "@/components/DatatableAction/DepartmentTableAction.vue";

const $toast = useToast()

export const useDepartmentStore = defineStore('department', {
    state: () => ({
        departments: [],
        loading: false,
        department: {
            name: '',
            status: 'active'
        },
        departmentId: null
    }),
    actions: {
        async fetchDepartments() {
            this.loading = true;
            await userAxiosInstance.get('/departments')
                .then((response) => {
                    const resData = response.data
                    this.departments = resData.data.lists.map(department => ({
                        ...department,
                        status: formatStatus(department.status),
                        action: {
                            component: shallowRef(DepartmentTableAction),
                            props: {department}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeDepartment() {
            try {
                await userAxiosInstance.post('/departments', this.department)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDepartments()
                        this.department.name = ''
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async updateDepartment() {
            try {
                await userAxiosInstance.put(`/departments/${this.departmentId}`, this.department)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDepartments()
                        this.department.name = ''
                        this.departmentId = null
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async deleteDepartments() {
            try {
                await userAxiosInstance.delete(`/departments/${this.departmentId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDepartments()
                        this.departmentId = null
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        }
    }
})