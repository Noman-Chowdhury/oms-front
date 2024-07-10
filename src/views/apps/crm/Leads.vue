<script setup>
import { onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";

import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import LeadsTableAction from "@/components/DatatableAction/LeadsTableAction.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import LeadsTableHeaderComponent from "@/components/leads/LeadsTableHeaderComponent.vue";

const actionColumnComponent = shallowRef(LeadsTableAction);

const router = useRouter();
const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Action", key: "action", type: "component" },
  { label: "Name", key: "name", sortable: true },
  { label: "Address", key: "address", sortable: true },
  { label: "Phone", key: "phone", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Company", key: "company", sortable: true },
  { label: "Description", key: "description" },
]);

const tableData = ref([
  { id: 1, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "65 Shire Oak Road", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Reopen laminectomy site" },
  { id: 2, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "C & s-upper GI", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Open bx saliv gland/duc" },
  { id: 3, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "65 Shire Oak Road", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Bowel diagnost proc NEC" },
  { id: 4, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "Thermokeratoplasty", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Thermokeratoplasty" },
  { id: 5, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "65 Shire Oak Road", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Bowel diagnost proc NEC" },
  { id: 6, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "65 Shire Oak Road", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Thermokeratoplasty" },
  { id: 7, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "Thermokeratoplasty", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Thermokeratoplasty" },
  { id: 8, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "65 Shire Oak Road", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Tibia/fibula inj op NOS" },
  { id: 9, action: actionColumnComponent, name: "Shaikh Abu Dardah", address: "C & s-upper GI", phone: "+1 234 567 890", email: "example@info.com", company: "Lawnscape Garden Maintenance", description: "Open bx saliv gland/duc" },
]);

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
          <template #title>Leads</template>
          <template #filter-column>
            <LeadsTableHeaderComponent />
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