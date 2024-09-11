import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import ShiftTableAction from "@/components/DatatableAction/ShiftTableAction.vue";

const $toast = useToast()

export const useCalenderStore = defineStore('calender', {
    state: () => ({
        holidays: [],
        loading: false,
        postData:{
            title:null,
            start_date: null,
            end_date: null,
            is_new: false,
            holiday_id: null
        }
    }),
    actions: {
        async fetchHolidays() {
            this.loading = true;
            await userAxiosInstance.get('/holidays')
                .then((response) => {
                    const resData = response.data
                    this.holidays = resData.data.lists
                })
            this.loading = false;
        },
        async storeOrUpdateHoliday() {
            this.loading = true;
            await userAxiosInstance.post('/holidays',this.postData)
                .then((response) => {
                    const resData = response.data
                    $toast.success(resData.message)
                })
            this.loading = false;
        },
    }
})