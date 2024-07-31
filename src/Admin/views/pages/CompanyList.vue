<script setup>
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import DataTable from "@/components/datatable/DigiDataTable.vue";
import CompanyTableHeaderComponent from "@/components/company/CompanyTableHeaderComponent.vue";
import {useCompanyStore} from "@/stores/useCompanies";
import Loader from "@/components/Loader.vue";

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  {label: "", key: "selected", type: "checkbox"},
  {label: "Company", key: "name", sortable: true},
  {label: "Address", key: "address", sortable: true},
  {label: "Email", key: "email", sortable: true},
  {label: "Phone", key: "phone_number", sortable: true},
  {label: "Contact Person", key: "contact_person", sortable: true},
  {label: "Status", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component'},
]);

const tableData = ref([])

const companyStore = useCompanyStore();

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
  companyStore.fetchCompanies()
})
</script>

<template>
  <div v-if="companyStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>Companies</template>
          <template #filter-column>
            <CompanyTableHeaderComponent/>
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="companyStore.companies"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              @update:selectedItems="selectedItems = $event"
          >
            <template #cell(action)="slotProps">
              <component
                  :is="slotProps.row.action.component"
                  v-bind="slotProps.row.action.props"
              />
            </template>
            <template #filterOption="{perPageOptions, updatePerPage}">
              <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>