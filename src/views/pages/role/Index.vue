<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

import DataTable from "@/components/datatable/DigiDataTable.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import AllEmployeeTableHeaderComponent from "@/components/employee/AllEmployeeTableHeaderComponent.vue";
import TableFilterOption from "@/components/employee/TableFilterOption.vue";
import {useEmployeeStore} from "@/stores/employee";
import Loader from "@/components/Loader.vue";
import {useRolePermissionStore} from "@/stores/rolePermission";


const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const employeeStore = useEmployeeStore()
const roleStore = useRolePermissionStore()
const tableColumns = ref([
  {label: "Name", key: "name", align: "left"},
  {label: "No of Permissions", key: "no_of_permissions"},
  {label: "Action", key: "action", type: "component",  align: "right"},
]);

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
  roleStore.fetchData()
})

</script>

<template>
  <div v-if="roleStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>All Roles</h5>
          <div class="btn-box d-flex gap-2">
            <router-link :to="{ name: 'role_create' }" class="btn btn-sm btn-primary" ><i class="fa-light fa-plus"></i> Add New</router-link>
          </div>
        </div>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="roleStore.roles"
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