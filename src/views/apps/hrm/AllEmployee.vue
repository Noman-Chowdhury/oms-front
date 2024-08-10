<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";

import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableAction from "@/components/DatatableAction/AllEmployeeTableAction.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import AllEmployeeTableHeaderComponent from "@/components/employee/AllEmployeeTableHeaderComponent.vue";
import TableFilterOption from "@/components/employee/TableFilterOption.vue";
import {useEmployeeStore} from "@/stores/employee";
import Loader from "@/components/Loader.vue";

const actionComponent = shallowRef(TableAction);

const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const employeeStore = useEmployeeStore()

const tableColumns = ref([
  {label: "Name", key: "nameImage", type: "component", align: "left"},
  {label: "Position", key: "position", type: "component"},
  {label: "Phone", key: "phone", sortable: true},
  {label: "Email", key: "email", sortable: true,},
  {label: "Shift", key: "shift", sortable: true},
  {label: "Today", key: "present_today", sortable: true},
  {label: "Status", key: "status", type: "html"},
  {label: "Action", key: "action", type: "component",  align: "right"},
]);

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
  employeeStore.fetchEmployees()
})

</script>

<template>
  <div v-if="employeeStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>All Employee</template>
          <template #filter-column>
            <AllEmployeeTableHeaderComponent/>
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="employeeStore.employees"
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