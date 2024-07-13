<script setup>
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import CompanyTableHeaderComponent from "@/components/company/CompanyTableHeaderComponent.vue";

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Company", key: "company", sortable: true },
  { label: "Address", key: "address", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Phone", key: "phone", sortable: true },
  { label: "Contact Person", key: "contact_person", sortable: true },
  { label: "Status", key: "status", sortable: false, type: 'switch' },
]);

const tableData = ref([
  { id: 1, company: "Pixoboo", address: "11th Floor", email: "pghilks1@ihg.com", phone: "361-912-5555", contact_person: "Pier Ghilks", status: false },
  { id: 2, company: "Voonte", address: "PO Box 47319", email: "bpibworth2@skyrock.com", phone: "139-467-9767", contact_person: "Benjamen Pibworth", status: true },
  { id: 3, company: "Tavu", address: "Apt 822", email: "tmarunchak3@disqus.com", phone: "312-345-8826", contact_person: "Tiena Marunchak", status: true },
  { id: 4, company: "Gabcube", address: "Room 1156", email: "grumbellow4@zimbio.com", phone: "473-579-1086", contact_person: "Gussy Rumbellow", status: false },
  { id: 5, company: "Layo", address: "Apt 1833", email: "dlindholm5@answers.com", phone: "199-433-5017", contact_person: "Doug Lindholm", status: true },
  { id: 6, company: "Skynoodle", address: "Suite 81", email: "msabbatier6@pinterest.com", phone: "245-774-3434", contact_person: "Mercie Sabbatier", status: false },
  { id: 7, company: "Cogibox", address: "Suite 55", email: "mcutforth7@nba.com", phone: "945-939-0545", contact_person: "Mirelle Cutforth", status: true },
  { id: 8, company: "Youspan", address: "Apt 1268", email: "ethecham8@tinyurl.com", phone: "988-704-0285", contact_person: "Elliot Thecham", status: true },
  { id: 9, company: "Fadeo", address: "Suite 22", email: "lcatherick9@dropbox.com", phone: "250-846-5231", contact_person: "Leo Catherick", status: false },
  { id: 10, company: "Pixoboo", address: "11th Floor", email: "pghilks1@ihg.com", phone: "361-912-5555", contact_person: "Pier Ghilks", status: false },
  { id: 11, company: "Youspan", address: "11th Floor", email: "pghilks1@ihg.com", phone: "361-912-5555", contact_person: "Pier Ghilks", status: false },
  { id: 12, company: "Voonte", address: "PO Box 47319", email: "bpibworth2@skyrock.com", phone: "139-467-9767", contact_person: "Benjamen Pibworth", status: true },
  { id: 13, company: "Tavu", address: "Apt 822", email: "tmarunchak3@disqus.com", phone: "312-345-8826", contact_person: "Tiena Marunchak", status: true },
  { id: 14, company: "Realpoint", address: "Room 1156", email: "grumbellow4@zimbio.com", phone: "473-579-1086", contact_person: "Gussy Rumbellow", status: false },
  { id: 15, company: "Layo", address: "Apt 1833", email: "dlindholm5@answers.com", phone: "199-433-5017", contact_person: "Doug Lindholm", status: true },
  { id: 16, company: "Edgepulse", address: "Suite 81", email: "msabbatier6@pinterest.com", phone: "245-774-3434", contact_person: "Mercie Sabbatier", status: false },
  { id: 17, company: "Cogibox", address: "Suite 55", email: "mcutforth7@nba.com", phone: "945-939-0545", contact_person: "Mirelle Cutforth", status: true },
  { id: 18, company: "Youspan", address: "Apt 1268", email: "ethecham8@tinyurl.com", phone: "988-704-0285", contact_person: "Elliot Thecham", status: true },
  { id: 19, company: "Fadeo", address: "Suite 22", email: "lcatherick9@dropbox.com", phone: "250-846-5231", contact_person: "Leo Catherick", status: false },
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
          <template #title>Companies</template>
          <template #filter-column>
            <CompanyTableHeaderComponent />
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