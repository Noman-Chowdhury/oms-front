<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import OrderTableAction from "@/components/DatatableAction/OrderTableAction.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import OrderTableHeaderComponent from "@/components/order/OrderTableHeaderComponent.vue";
import OrderTableFilterOption from "@/components/order/OrderTableFilterOption.vue";

const orderActionComponent = shallowRef(OrderTableAction);

const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Order ID", key: "order_id", sortable: true, type: "link" },
  { label: "Customer", key: "customer", sortable: true },
  { label: "Status", key: "status", type: "html" },
  { label: "Product", key: "product", sortable: true },
  { label: "Price", key: "price", sortable: true },
  { label: "Payment Method", key: "payment_method", sortable: true },
  { label: "Delivery Status", key: "delivery_status", type: 'html' },
  { label: "Order Date", key: "order_date", sortable: true },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, order_id: {name: '#22120101', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 2, order_id: {name: '#22120102', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 24, price: '$224', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 3, order_id: {name: '#22120103', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 13, price: '$213', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 4, order_id: {name: '#22120104', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 12, price: '$212', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 5, order_id: {name: '#22120105', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 35, price: '$235', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 6, order_id: {name: '#22120106', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 20, price: '$220', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 7, order_id: {name: '#22120107', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 18, price: '$218', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 8, order_id: {name: '#22120108', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 26, price: '$226', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 9, order_id: {name: '#22120109', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 10, order_id: {name: '#22120110', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 11, order_id: {name: '#22120111', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 29,  price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 12, order_id: {name: '#22120112', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 13, order_id: {name: '#22120113', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 14, order_id: {name: '#22120114', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 19, price: '$219', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 15, order_id: {name: '#22120115', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 29, price: '$229', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 16, order_id: {name: '#22120116', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 9, price: '$29', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 17, order_id: {name: '#22120117', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-warning">Hold</span>', product: 11, price: '$211', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
  { id: 18, order_id: {name: '#22120118', url: '/invoices'}, customer: 'Shaikh Abu Dardah', status: '<span class="text-danger">Pending</span>', product: 8, price: '$28', payment_method: 'Cash on', delivery_status: '<span class="badge bg-success">Delivered</span>', order_date: '12/24/2023 - 01:05 PM', action: orderActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
})

</script>

<template>
  <div class="row g-4">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>All Order</template>
          <template #filter-column>
            <OrderTableHeaderComponent />
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <digi-data-table
            ref="table"
            :data="tableData"
            :columns="tableColumns"
            :selectedItems="selectedItems"
            @update:selectedItems="selectedItems = $event"
            :classes="'lc-start'"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <OrderTableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>