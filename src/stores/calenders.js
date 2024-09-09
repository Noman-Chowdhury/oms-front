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
    }
})