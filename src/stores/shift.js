import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import ShiftTableAction from "@/components/DatatableAction/ShiftTableAction.vue";

const $toast = useToast()

export const useShiftStore = defineStore('shift', {
    state: () => ({
        shifts: [],
        loading: false,
        shift: {
            name: '',
            start_time: '',
            end_time: '',
            status: 'active'
        },
        shiftId: null
    }),
    actions: {
        async fetchShifts() {
            this.loading = true;
            await userAxiosInstance.get('/shifts')
                .then((response) => {
                    const resData = response.data
                    this.shifts = resData.data.lists.map(shift => ({
                        ...shift,
                        status: formatStatus(shift.status),
                        action: {
                            component: shallowRef(ShiftTableAction),
                            props: {shift}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeShift() {
            try {
                await userAxiosInstance.post('/shifts', this.shift)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchShifts()
                        this.shift.name = ''
                        this.shift.start_time = ''
                        this.shift.end_time = ''
                    })
            } catch (error) {
                console.log('Error wile adding shift :', error)
            }
        },
        async updateShift() {
            try {
                await userAxiosInstance.put(`/shifts/${this.shiftId}`, this.shift)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchShifts()
                        this.shift.name = ''
                        this.shift.start_time = ''
                        this.shift.end_time = ''
                        this.shiftId = null
                    })
            } catch (error) {
                console.log('Error wile adding shift :', error)
            }
        },
        async deleteShift() {
            try {
                await userAxiosInstance.delete(`/shifts/${this.shiftId}`)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchShifts()
                        this.shiftId = null
                    })
            } catch (error) {
                console.log('Error wile adding shift :', error)
            }
        }
    }
})