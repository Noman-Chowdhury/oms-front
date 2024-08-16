import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import DayDate from "@/components/attendance/DayDate.vue";
import NameWithImage from "@/components/employee/NameWithImage.vue";
import CheckInOut from "@/components/attendance/CheckInOut.vue";

const $toast = useToast()

export const useAttendanceStore = defineStore('attendance', {
    state: () => ({
        attendances: [],
        loading: false,
        attendance: {
            address: '',
            latitude: '',
            longitude: '',
        },
        attendanceId: null,
        entered: false,
        exited: false
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await userAxiosInstance.get('/attendances')
                .then((response) => {
                    const resData = response.data
                    this.attendances = resData.data.lists.map(attendance => ({
                        ...attendance,
                        status: formatStatus(attendance.status),
                        dayDate: {
                            component: shallowRef(DayDate),
                            props: {attendance}
                        },
                        nameImage: {
                            component: shallowRef(NameWithImage),
                            props: {employee: attendance.employee}
                        },
                        checkIn: {
                            component: shallowRef(CheckInOut),
                            props: {time: attendance.check_in,address: attendance.check_in_address}
                        },
                        checkOut: {
                            component: shallowRef(CheckInOut),
                            props: {time: attendance.check_out,address: attendance.check_out_address}
                        },
                    }))
                    this.entered = resData.data.entered
                    this.exited = resData.data.exited
                })
            this.loading = false;
        },
        async store() {
            try {
                await userAxiosInstance.post('/attendances', this.attendance)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchData()
                        this.attendance.address = ''
                        this.attendance.latitude = ''
                        this.attendance.longitude = ''
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