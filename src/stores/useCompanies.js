// stores/useCompanyStore.js
import {defineStore} from 'pinia';
import {adminAxiosInstance, userAxiosInstance} from "@/plugins/axiosInstance";
import {formatStatus} from "@/utils/formatStatus";
import {shallowRef} from "vue";
import CompanyTableAction from "@/Admin/components/DatatableAction/CompanyTableAction.vue";
import {useToast} from "vue-toast-notification";

const $toast = useToast({position: 'top-right'});

export const useCompanyStore = defineStore('company', {
    state: () => ({
        companies: [],
        loading: false,
        company: {}
    }),
    actions: {
        async fetchCompanies() {
            this.loading = true;
            adminAxiosInstance.get('/companies')
                .then((response) => {
                    const resData = response.data
                    this.companies = resData.data.companies.map(company => ({
                        ...company,
                        status: formatStatus(company.status),
                        action: {
                            component: shallowRef(CompanyTableAction),
                            props: {company}
                        }
                    }))
                })
            this.loading = false;
        },
        async approveCompany(companyId) {
            try {
                this.loading = true;
                await adminAxiosInstance.post(`/companies/${companyId}/approve`)
                    .then((response) => {
                        $toast.success(response.data.message)
                        const company = this.companies.find(c => c.id === companyId);
                        if (company) {
                            company.status = 'active';
                            company.status = formatStatus('active');
                        }
                    });
            } catch (error) {
                console.error('Error approving company:', error);
            }
            this.loading = false;
        },
        async fetchCompanyInfo() {
            try {
                this.loading = true;
                await userAxiosInstance.get(`/my-company-info`)
                    .then((response) => {
                        const resData = response.data
                        this.company = resData.data.info
                    });
            } catch (error) {
                console.error('Error approving company:', error);
            }
            this.loading = false;
        }

    }
});
