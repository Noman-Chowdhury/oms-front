<script setup>

import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import Loader from "@/components/Loader.vue";

import 'flatpickr/dist/flatpickr.css';
import {useUserInfoStore} from "@/stores/userInfoStore";
import {usePayrollStore} from "@/stores/payroll";

const table = ref(null);
const selectedItems = ref([]);
const userTable = ref([
  {label: "PERIOD", key: "date_range"},
  {label: "BASIC SALARY", key: "basic_salary"},
  {label: "BONUS", key: "bonuses"},
  {label: "DEDUCTION", key: "deductions",},
  {label: "NET SALARY", key: "net_salary",},
  {label: "STATUS", key: "status", sortable: false, type: 'html'},
  {label: "ACTION", key: "action", sortable: false, type: 'component', align: 'right'},
]);
const adminTable = ref([
  {label: "NAME", key: "nameImage", type: "component"},
  {label: "PERIOD", key: "date_range"},
  {label: "BASIC SALARY", key: "basic_salary"},
  {label: "BONUS", key: "bonuses"},
  {label: "DEDUCTION", key: "deductions",},
  {label: "NET SALARY", key: "net_salary",},
  {label: "STATUS", key: "status", sortable: false, type: 'html'},
  {label: "ACTION", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const payrollStore = usePayrollStore();
const userInfoStore = useUserInfoStore()

onMounted(() => {
  payrollStore.fetchData()
})
</script>

<template>
  <div v-if="payrollStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>
            Payroll List
          </h5>
          <router-link :to="{ name: 'payrolls_create' }" class="btn btn-sm btn-primary" v-if="!userInfoStore.user.is_employee && userInfoStore.hasPermission('add new payroll')"><i class="fa-light fa-plus"></i> Add New</router-link>
        </div>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="payrollStore.payrolls"
              :columns="userInfoStore.user.is_employee ? userTable : adminTable"
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