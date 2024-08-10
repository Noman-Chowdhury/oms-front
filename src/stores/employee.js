import {defineStore} from "pinia";

import {useToast} from "vue-toast-notification";
import {userAxiosInstance} from "@/plugins/axiosInstance";
import {shallowRef} from "vue";
import AllEmployeeTableAction from "@/components/DatatableAction/AllEmployeeTableAction.vue";
import router from "@/router";
import NameWithImage from "@/components/employee/NameWithImage.vue";
import Position from "@/components/employee/Position.vue";
import {formatStatus} from "@/utils/formatStatus";
import EmployeeTableAction from "@/components/DatatableAction/EmployeeTableAction.vue";

const $toast = useToast();
const getInitialEmployeeState = () => ({
    employee_id: '',
    name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    date_of_hire: '',
    alternate_phone_number: '',
    country: 'bangladesh',
    department_id: '',
    designation_id: '',
    shift_id: '',
    bank_name: '',
    branch_name: '',
    bank_account_name: '',
    bank_account_number: '',
    contact_person_name: '',
    contact_person_phone: '',
    contact_person_relation: '',
    gender: '',
    marital_status: '',
    blood_group: '',
    nid_no: '',
    image: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    same_address: false,
    login_access: false,
});

export const useEmployeeStore = defineStore('employee', {
    state: () => ({
        employees: [],
        loading: false,
        employee: getInitialEmployeeState(),
        employeeId: null
    }),
    actions: {
        async fetchEmployees() {
            this.loading = true;
            await userAxiosInstance.get('/employees')
                .then((response) => {
                    const resData = response.data
                    this.employees = resData.data.lists.map(employee => ({
                        ...employee,
                        nameImage: {
                            component: shallowRef(NameWithImage),
                            props: {employee}
                        },
                        position: {
                            component: shallowRef(Position),
                            props: {employee}
                        },
                        status: formatStatus(employee.status),
                        action: {
                            component: shallowRef(EmployeeTableAction),
                            props: {employee}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeEmployee() {
            try {
                this.loading = true;
                await userAxiosInstance.post('/employees', this.employee)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.resetEmployeeState();
                        router.push({name: 'all_employee'});
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
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async updateEmployee() {
            try {
                await userAxiosInstance.put(`/designations/${this.designationId}`, this.designation)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.resetEmployeeState();
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async deleteDesignation() {
            try {
                await userAxiosInstance.delete(`/designations/${this.designationId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDesignations()
                        this.designationId = null
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        resetEmployeeState() {
            this.employee = getInitialEmployeeState();
        }
    },
    setters: () => ({
        setDesignation(data) {
            this.designation.name = data.name
            this.designation.status = data.status
        }
    }),
    getters: {
        getUpdatableDesignationId() {
            return this.state.designationId
        }
    }
})