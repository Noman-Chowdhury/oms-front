<script setup>
import {onMounted, ref} from "vue";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/employee/TableFilterOption.vue";

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Name", key: "name", sortable: true },
  { label: "Username", key: "username", sortable: true },
  { label: "Last Active", key: "last_active", sortable: true },
  { label: "Date Registered", key: "date_registered", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Orders", key: "orders", sortable: true },
  { label: "Total Spend", key: "total_spend", sortable: true },
  { label: "AOV", key: "aov", sortable: true },
  { label: "Country / Region", key: "country_region", sortable: true },
  { label: "City", key: "city", sortable: true },
  { label: "Region", key: "region", sortable: true },
  { label: "Postal Code", key: "postal_code", sortable: true },
]);

const tableData = ref([
  { id: 1, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 2, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 3, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 4, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 5, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 6, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 7, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 8, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 9, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 10, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 11, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 12, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 13, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 14, name: 'Shaikh Abu Dardah', username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
]);

onMounted(() => {
});

</script>

<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        Data Table Body Scroll
      </div>
      <div class="card-body">
        <div class="table-filter-option">
          <div class="d-flex justify-content-between data-table-filter default-data-table">
            <div id="productTableLength"></div>
            <div id="tableSearch"></div>
          </div>
        </div>
        <digi-data-table
          ref="table"
          :data="tableData"
          :columns="tableColumns"
          :selectedItems="selectedItems"
          @update:selectedItems="selectedItems = $event"
        >
          <template #filterOption="{perPageOptions, updatePerPage}">
            <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
          </template>
        </digi-data-table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>