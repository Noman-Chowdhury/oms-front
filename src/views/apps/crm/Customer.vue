<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import CustomerTableAction from "@/components/DatatableAction/CustomerTableAction.vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import CustomerTableHeaderComponent from "@/components/customer/CustomerTableHeaderComponent.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";

const customerActionComponent = shallowRef(CustomerTableAction);

const router = useRouter();
const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Action", key: "action", type: "component" },
  { label: "Customer ID", key: "customer_id", sortable: true },
  { label: "Name", key: "name", sortable: true },
  { label: "Phone", key: "phone", sortable: true },
  { label: "Group", key: "group", sortable: true },
  { label: "Customer Type", key: "customer_type", sortable: true },
  { label: "Credit Limit", key: "credit_limit", sortable: true },
  { label: "Opening Balance", key: "opening_balance", sortable: true },
  { label: "Debit", key: "debit", sortable: true },
  { label: "Credit", key: "credit", sortable: true },
  { label: "Closing Balance", key: "closing_balance", sortable: true },
  { label: "Status", key: "status", sortable: false, type: 'switch' },
]);

const tableData = ref([
  { id: 1, action: customerActionComponent,  customer_id: 'C-001', name: "Shaikh Abu Dardah", phone: "956-219-2675", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 2, action: customerActionComponent,  customer_id: 'C-002', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 3, action: customerActionComponent,  customer_id: 'C-003', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 4, action: customerActionComponent,  customer_id: 'C-004', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 5, action: customerActionComponent,  customer_id: 'C-005', name: "Shaikh Abu Dardah", phone: "956-219-2675", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 6, action: customerActionComponent,  customer_id: 'C-006', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 7, action: customerActionComponent,  customer_id: 'C-007', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 8, action: customerActionComponent,  customer_id: 'C-008', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 9, action: customerActionComponent,  customer_id: 'C-009', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 10, action: customerActionComponent,  customer_id: 'C-0010', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 11, action: customerActionComponent,  customer_id: 'C-0011', name: "Shaikh Abu Dardah", phone: "956-219-2675", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 12, action: customerActionComponent,  customer_id: 'C-0012', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 13, action: customerActionComponent,  customer_id: 'C-0013', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 14, action: customerActionComponent,  customer_id: 'C-0014', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 15, action: customerActionComponent,  customer_id: 'C-0015', name: "Shaikh Abu Dardah", phone: "956-219-2675", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 16, action: customerActionComponent,  customer_id: 'C-0016', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 17, action: customerActionComponent,  customer_id: 'C-0017', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 18, action: customerActionComponent,  customer_id: 'C-0018', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: true },
  { id: 19, action: customerActionComponent,  customer_id: 'C-0019', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 20, action: customerActionComponent,  customer_id: 'C-0020', name: "Shaikh Abu Dardah", phone: "+1 234 567 890", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
  { id: 21, action: customerActionComponent,  customer_id: 'C-0021', name: "Shaikh Abu Dardah", phone: "956-219-2675", group: "Demo Group 1", customer_type: 1, credit_limit: '0.00', opening_balance: "0.00", debit: 'Incomplete', credit: 'Incomplete', closing_balance: 'Incomplete', status: false },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
})

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>Customers</template>
          <template #filter-column>
            <CustomerTableHeaderComponent />
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <digi-data-table
              ref="table"
              :data="tableData"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              :classes="'table-td-center'"
              @update:selectedItems="selectedItems = $event"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>