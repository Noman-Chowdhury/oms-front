<script setup>
import {onMounted, ref, shallowRef} from "vue";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import OrderTableAction from "@/components/DatatableAction/OrderTableAction.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";

const orderActionComponent = shallowRef(OrderTableAction);

const table = ref(null);
const selectedItems = ref([]);
const search = ref('');

const tableColumns = ref([
  { label: 'Order ID', key: 'order_id',sortable: true },
  { label: 'Customer', key: 'customer',sortable: true },
  { label: 'Order Date', key: 'order_date',sortable: true },
  { label: 'Payment Method', key: 'payment_method',sortable: true },
  { label: 'Delivery Date', key: 'delivery_date',sortable: true },
  { label: 'Total Amount', key: 'total_amount', sortable: true },
  { label: 'Status', key: 'status', type: 'html' },
  { label: 'Action', key: 'action', type: "component" },
]);

const tableData = ref([
  { id: 1, order_id: '855212', customer: "Soward", order_date: "28/10/22", payment_method: 'Cash', delivery_date: '02/11/22', total_amount: '$05.22', status: '<span class="badge bg-success">Paid</span>', action: orderActionComponent },
  { id: 2, order_id: '855213', customer: "Kian", order_date: "29/10/22", payment_method: 'Card', delivery_date: '03/11/22', total_amount: '$17.00', status: '<span class="badge bg-success">Delivered</span>', action: orderActionComponent },
  { id: 3, order_id: '855214', customer: "Jennifer", order_date: "29/10/22", payment_method: 'Card', delivery_date: '03/11/22', total_amount: '$15.22', status: '<span class="badge bg-warning">Pending</span>', action: orderActionComponent },
  { id: 4, order_id: '855215', customer: "Benjamin", order_date: "30/10/22", payment_method: 'Cash', delivery_date: '03/11/22', total_amount: '$12.15', status: '<span class="badge bg-danger">Unpaid</span>', action: orderActionComponent },
  { id: 5, order_id: '855216', customer: "Anna", order_date: "31/10/22", payment_method: 'Cheque', delivery_date: '04/11/22', total_amount: '$05.35', status: '<span class="badge bg-danger">Canceled</span>', action: orderActionComponent },
  { id: 6, order_id: '855217', customer: "Bradley", order_date: "01/11/22", payment_method: 'Cash', delivery_date: '05/11/22', total_amount: '$25.28', status: '<span class="badge bg-warning">Pending</span>', action: orderActionComponent },
  { id: 7, order_id: '855218', customer: "Parkinson", order_date: "03/11/22", payment_method: 'Cheque', delivery_date: '06/11/22', total_amount: '$32.32', status: '<span class="badge bg-warning">Pending</span>', action: orderActionComponent },
  { id: 8, order_id: '975492', customer: "Gavin", order_date: "12/06/23", payment_method: 'Cash', delivery_date: '16/06/23', total_amount: '$32.32', status: '<span class="badge bg-success">Paid</span>', action: orderActionComponent }
])

const dtSearch = (() => {
  table.value.updateSearch(search.value)
})

onMounted(() => {

})
</script>

<template>
  <div class="col-xxl-8">
    <div class="panel">
      <div class="panel-header">
        <h5>Recent Orders</h5>
        <div>
          <div class="dataTables_filter">
            <label>
              <input type="search" v-model="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="myTable" @input="dtSearch">
            </label>
          </div>
        </div>
      </div>
      <div class="panel-body">
        <digi-data-table
            ref="table"
            :data="tableData"
            :columns="tableColumns"
            :selectedItems="selectedItems"
            @update:selectedItems="selectedItems = $event"
        >
        </digi-data-table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>