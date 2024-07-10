<script setup>
import {onMounted, onUnmounted, ref} from "vue";

import {useRouter} from "vue-router";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import AllCustomerTableHeaderComponent from "@/components/customer/AllCustomerTableHeaderComponent.vue";
import CustomerTableFilterOption from "@/components/customer/CustomerTableFilterOption.vue";

const router = useRouter();
const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Name", key: "name", sortable: true, type: "link" },
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
  { id: 1, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 2, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 3, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 4, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 5, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 6, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 7, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 8, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 9, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 10, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 11, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 12, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 13, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
  { id: 14, name: { name: 'Shaikh Abu Dardah', url: '#' }, username: 'admin', last_active: 'December 27, 2022', date_registered: 'November 23, 2021', email: 'example@info.com', orders: '2', total_spend: '$74.00', aov: '$74.00', country_region: 'BD', city: 'Dhaka', region: 'CA', postal_code: '12563' },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>All Customer</template>
          <template #filter-column>
            <AllCustomerTableHeaderComponent />
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <digi-data-table
              ref="table"
              :data="tableData"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              @update:selectedItems="selectedItems = $event"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <CustomerTableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>