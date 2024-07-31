import {defineStore} from "pinia";

import {axiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";

const $toast = useToast()

export const useLocationStore = defineStore('locations', {
    state: () => ({
        divisions: [],
        districts: [],
        upazilas: [],
        unions: [],
    }),
    actions: {
        async fetchDivisions() {
            await axiosInstance.get('/api/divisions')
                .then((response) => {
                    const resData = response.data
                    this.divisions = resData.data.lists
                })
        },
        async fetchDistricts(division_id) {
            await axiosInstance.get(`/api/districts/${division_id}`)
                .then((response) => {
                    const resData = response.data
                    this.districts = resData.data.lists
                })
        },
        async fetchUpazilas(district_id) {
            await axiosInstance.get(`/api/upazilas/${district_id}`)
                .then((response) => {
                    const resData = response.data
                    this.upazilas = resData.data.lists
                })
        },
        async fetchUnions(upazila_id) {
            await axiosInstance.get(`/api/unions/${upazila_id}`)
                .then((response) => {
                    const resData = response.data
                    this.unions = resData.data.lists
                })
        },

    }
})