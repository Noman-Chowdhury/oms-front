import {defineStore} from "pinia";

import {userAxiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import DesignationTableAction from "@/components/DatatableAction/DesignationTableAction.vue";

const $toast = useToast()

export const designationStore = defineStore('designation', {
    state: () => ({
        designations: [],
        loading: false,
        designation: {
            name: '',
            status: 'active'
        },
        designationId: null
    }),
    actions: {
        async fetchDesignations() {
            this.loading = true;
            await userAxiosInstance.get('/designations')
                .then((response) => {
                    const resData = response.data
                    this.designations = resData.data.lists.map(designation => ({
                        ...designation,
                        status: formatStatus(designation.status),
                        action: {
                            component: shallowRef(DesignationTableAction),
                            props: {designation}
                        }
                    }))
                })
            this.loading = false;
        },
        async storeDesignation() {
            try {
                await userAxiosInstance.post('/designations', this.designation)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDesignations()
                        this.designation.name = ''
                    })
            } catch (error) {
                console.log('Error wile adding designation :', error)
            }
        },
        async updateDesignation() {
            try {
                await userAxiosInstance.put(`/designations/${this.designationId}`, this.designation)
                    .then((res) => {
                        $toast.success(res.data.message)
                        this.fetchDesignations()
                        this.designation.name = ''
                        this.designationId = null
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