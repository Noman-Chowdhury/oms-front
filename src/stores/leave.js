import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import DepartmentTableAction from "@/components/DatatableAction/DepartmentTableAction.vue";
import LeaveTableAction from "@/components/DatatableAction/LeaveTableAction.vue";
import NameWithImage from "@/components/employee/NameWithImage.vue";

const $toast = useToast()

const getInitialLeaveState = () => ({
    start_date: '',
    end_date: '',
    leave_for: '',
    reason: '',
    leave_type_id: ''
})
export const useLeaveStore = defineStore('leave', {
    state: () => ({
        leaves: [],
        loading: false,
        leave: getInitialLeaveState(),
        leaveId: null
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/leaves')
                .then((response) => {
                    const resData = response.data
                    this.leaves = resData.data.lists.map(leave => ({
                        ...leave,
                        status: formatStatus(leave.status),
                        action: {
                            component: shallowRef(LeaveTableAction),
                            props: {leave}
                        },
                        nameImage: {
                            component: shallowRef(NameWithImage),
                            props: {employee: leave.employee}
                        },
                    }))
                })
            this.loading = false;
        },
        async storeData() {
            try {
                await userAxiosInstance.post('/leaves', this.leave)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.resetState()
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
                await userAxiosInstance.put(`/leaves/${this.leaveId}`, this.leave)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.resetState()
                        this.leaveId = null
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
                console.log('Error wile updating  :', error)
            }
        },
        async deleteData() {
            try {
                await userAxiosInstance.delete(`/leaves/${this.leaveId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.leaveId = null
                    })
            } catch (error) {
                console.log('Error wile deleting :', error)
            }
        },
        async updateStatus(status) {
            try {
                await userAxiosInstance.put(`/leaves/update-status/${this.leaveId}`, {status: status})
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.leaveId = null
                    })
            } catch (error) {
                console.log('Error wile deleting :', error)
            }
        },
        resetState() {
            this.leave = getInitialLeaveState()
        }
    }
})