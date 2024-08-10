import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import LeaveTypeTableAction from "@/components/DatatableAction/LeaveTypeTableAction.vue";

const $toast = useToast()

export const useLeaveTypeStore = defineStore('leave-type', {
    state: () => ({
        leaveTypes: [],
        loading: false,
        leaveType: {
            name: '',
            status: 'active'
        },
        leaveTypeId: null
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/leave-types')
                .then((response) => {
                    const resData = response.data
                    this.leaveTypes = resData.data.lists.map(leaveType => ({
                        ...leaveType,
                        status: formatStatus(leaveType.status),
                        action: {
                            component: shallowRef(LeaveTypeTableAction),
                            props: {leaveType}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeData() {
            try {
                await userAxiosInstance.post('/leave-types', this.leaveType)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.leaveType.name = ''
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async updateData() {
            try {
                await userAxiosInstance.put(`/leave-types/${this.leaveTypeId}`, this.leaveType)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.leaveType.name = ''
                        this.leaveTypeId = null
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async deleteData() {
            try {
                await userAxiosInstance.delete(`/leave-types/${this.leaveTypeId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.leaveTypeId = null
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        }
    }
})