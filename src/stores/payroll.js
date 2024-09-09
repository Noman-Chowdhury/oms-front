import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import NameWithImage from "@/components/employee/NameWithImage.vue";
import PayrollTableAction from "@/components/DatatableAction/PayrollTableAction.vue";

const $toast = useToast()

const getInitialPayrollState = () => ({
    employee_id: '',
    pay_period_start: '',
    pay_period_end: '',
    basic_salary: 0,
    bonuses: 0,
    deductions: 0,
    payment_date: '',
    payment_notes: '',
})
export const usePayrollStore = defineStore('payroll', {
    state: () => ({
        payrolls: [],
        loading: false,
        payroll: getInitialPayrollState(),
        payrollId: null,
        payrollPreviewHtml: null
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/payrolls')
                .then((response) => {
                    const resData = response.data
                    this.payrolls = resData.data.lists.map(payroll => ({
                        ...payroll,
                        status: formatStatus(payroll.status),
                        action: {
                            component: shallowRef(PayrollTableAction),
                            props: {payroll}
                        },
                        nameImage: {
                            component: shallowRef(NameWithImage),
                            props: {employee: payroll.employee}
                        },
                    }))
                })
            this.loading = false;
        },
        async getData() {
            try {
                this.loading = true;
                const response = await userAxiosInstance.get(`/payrolls/${this.payrollId}`)
                this.payrollPreviewHtml = response.data;
                this.loading = false;
            } catch (error) {
                console.error("Error fetching payroll data", error);
            }

        },
        async storeData() {
            try {
                this.loading = true;
                await userAxiosInstance.post('/payrolls', this.payroll)
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
            this.loading = false;
        },
        async updateData() {
            try {
                await userAxiosInstance.put(`/payrolls/${this.payrollId}`, this.payroll)
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
                await userAxiosInstance.delete(`/payrolls/${this.payrollId}`)
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
        async getPayrollDetails() {
            try {
                await userAxiosInstance.get(`/payrolls/get-payroll-information/${this.payroll.employee_id}`, {
                    params: {
                        start_date: this.payroll.pay_period_start,
                        end_date: this.payroll.pay_period_end,
                    }
                })
                    .then((response) => {
                        $toast.success(response.data.message)
                        const resData = response.data
                        this.payroll.basic_salary = resData.data.basic_salary
                        this.payroll.deductions = resData.data.deductions
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
        resetState() {
            this.payroll = getInitialPayrollState()
        }
    }
})