<script setup>
import {onMounted, ref} from "vue";

import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import CompanyTableHeaderComponent from "@/components/audience/CompanyTableHeaderComponent.vue";

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "First Name", key: "first_name", sortable: true },
  { label: "Last Name", key: "last_name", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Company", key: "company", sortable: true },
  { label: "Phone", key: "phone", sortable: true },
  { label: "Position", key: "position", sortable: true },
  { label: "Last Login", key: "last_login", sortable: true },
  { label: "Status", key: "status", sortable: false, type: 'switch' },
]);

const tableData = ref([
  { id: 1, first_name: "Gwenora", last_name: "Rippingale", email: "grippingale0@chronoengine.com", company: "Leenti", phone: "956-219-2675", position: "Mechanical Systems Engineer",  last_login: "4 hours ago", status: false },
  { id: 2, first_name: "Cary", last_name: "Shobbrook", email: "cshobbrook1@weather.com", company: "Pixope", phone: "130-245-5741", position: "Human Resources Manager",  last_login: "2 hours ago", status: true },
  { id: 3, first_name: "Chalder", last_name: "Shobbrook", email: "dchalder2@addtoany.com", company: "Devcast", phone: "472-424-3551", position: "Account Executive",  last_login: "2 hours ago", status: true },
  { id: 4, first_name: "Evin", last_name: "Antoons", email: "eantoons3@ebay.com", company: "Trilia", phone: "321-196-7694", position: "Human Resources Manager",  last_login: "2 hours ago", status: false },
  { id: 5, first_name: "Rowan", last_name: "Haller", email: "rhaller4@vkontakte.ru", company: "Zoombeat", phone: "317-332-4304", position: "Financial Analyst",  last_login: "4 hours ago", status: true },
  { id: 6, first_name: "Liana", last_name: "Eskrick", email: "leskrick5@friendfeed.com", company: "Innojam", phone: "623-329-8993", position: "Systems Administrator III",  last_login: "3 hours ago", status: true },
  { id: 7, first_name: "Clarine", last_name: "Bellany", email: "cbellany6@yandex.ru", company: "Realcube", phone: "125-567-8364", position: "Engineer III",  last_login: "4 hours ago", status: false },
  { id: 8, first_name: "Armin", last_name: "Borth", email: "aborth7@reddit.com", company: "Zoombeat", phone: "305-799-2940", position: "Environmental Specialist",  last_login: "4 hours ago", status: false },
  { id: 9, first_name: "Phil", last_name: "Antonat", email: "pantonat8@sogou.com", company: "Oyope", phone: "148-853-6804", position: "Accountant I",  last_login: "4 hours ago", status: false },
  { id: 10, first_name: "Spense", last_name: "Dresse", email: "sdresse9@domainmarket.com", company: "Gabtype", phone: "593-567-2949", position: "Assistant Manager",  last_login: "4 hours ago", status: false },
  { id: 11, first_name: "Gwenora", last_name: "Rippingale", email: "grippingale0@chronoengine.com", company: "Leenti", phone: "956-219-2675", position: "Mechanical Systems Engineer",  last_login: "4 hours ago", status: false },
  { id: 12, first_name: "Cary", last_name: "Shobbrook", email: "cshobbrook1@weather.com", company: "Pixope", phone: "130-245-5741", position: "Human Resources Manager",  last_login: "2 hours ago", status: true },
  { id: 13, first_name: "Chalder", last_name: "Shobbrook", email: "dchalder2@addtoany.com", company: "Devcast", phone: "472-424-3551", position: "Account Executive",  last_login: "2 hours ago", status: true },
  { id: 14, first_name: "Evin", last_name: "Antoons", email: "eantoons3@ebay.com", company: "Trilia", phone: "321-196-7694", position: "Human Resources Manager",  last_login: "2 hours ago", status: false },
  { id: 15, first_name: "Rowan", last_name: "Haller", email: "rhaller4@vkontakte.ru", company: "Zoombeat", phone: "317-332-4304", position: "Financial Analyst",  last_login: "4 hours ago", status: true },
  { id: 16, first_name: "Liana", last_name: "Eskrick", email: "leskrick5@friendfeed.com", company: "Innojam", phone: "623-329-8993", position: "Systems Administrator III",  last_login: "3 hours ago", status: true },
  { id: 17, first_name: "Clarine", last_name: "Bellany", email: "cbellany6@yandex.ru", company: "Realcube", phone: "125-567-8364", position: "Engineer III",  last_login: "4 hours ago", status: false },
  { id: 18, first_name: "Armin", last_name: "Borth", email: "aborth7@reddit.com", company: "Zoombeat", phone: "305-799-2940", position: "Environmental Specialist",  last_login: "4 hours ago", status: false },
  { id: 19, first_name: "Phil", last_name: "Antonat", email: "pantonat8@sogou.com", company: "Oyope", phone: "148-853-6804", position: "Accountant I",  last_login: "4 hours ago", status: false },
  { id: 20, first_name: "Elva", last_name: "Dresse", email: "sdresse9@domainmarket.com", company: "Gabtype", phone: "593-567-2949", position: "Assistant Manager",  last_login: "4 hours ago", status: false },
  { id: 21, first_name: "Gwenora", last_name: "Hasser", email: "grippingale0@chronoengine.com", company: "Leenti", phone: "956-219-2675", position: "Mechanical Systems Engineer",  last_login: "4 hours ago", status: false },
  { id: 22, first_name: "Cary", last_name: "Shobbrook", email: "cshobbrook1@weather.com", company: "Pixope", phone: "130-245-5741", position: "Human Resources Manager",  last_login: "2 hours ago", status: true },
  { id: 23, first_name: "Chalder", last_name: "Shobbrook", email: "dchalder2@addtoany.com", company: "Devcast", phone: "472-424-3551", position: "Account Executive",  last_login: "2 hours ago", status: true },
  { id: 24, first_name: "Evin", last_name: "Antoons", email: "eantoons3@ebay.com", company: "Trilia", phone: "321-196-7694", position: "Human Resources Manager",  last_login: "2 hours ago", status: false },
  { id: 25, first_name: "Rowan", last_name: "Haller", email: "rhaller4@vkontakte.ru", company: "Zoombeat", phone: "317-332-4304", position: "Financial Analyst",  last_login: "4 hours ago", status: true },
  { id: 26, first_name: "Liana", last_name: "Eskrick", email: "leskrick5@friendfeed.com", company: "Innojam", phone: "623-329-8993", position: "Systems Administrator III",  last_login: "3 hours ago", status: true },
  { id: 27, first_name: "Clarine", last_name: "Bellany", email: "cbellany6@yandex.ru", company: "Realcube", phone: "125-567-8364", position: "Engineer III",  last_login: "4 hours ago", status: false },
  { id: 28, first_name: "Armin", last_name: "Borth", email: "aborth7@reddit.com", company: "Zoombeat", phone: "305-799-2940", position: "Environmental Specialist",  last_login: "4 hours ago", status: false },
  { id: 29, first_name: "Phil", last_name: "Antonat", email: "pantonat8@sogou.com", company: "Oyope", phone: "148-853-6804", position: "Accountant I",  last_login: "4 hours ago", status: false },
  { id: 30, first_name: "Spense", last_name: "Dresse", email: "sdresse9@domainmarket.com", company: "Gabtype", phone: "593-567-2949", position: "Assistant Manager",  last_login: "4 hours ago", status: false },
  { id: 31, first_name: "Gwenora", last_name: "Rippingale", email: "grippingale0@chronoengine.com", company: "Leenti", phone: "956-219-2675", position: "Mechanical Systems Engineer",  last_login: "4 hours ago", status: false },
  { id: 32, first_name: "Cary", last_name: "Shobbrook", email: "cshobbrook1@weather.com", company: "Pixope", phone: "130-245-5741", position: "Human Resources Manager",  last_login: "2 hours ago", status: true },
  { id: 33, first_name: "Chalder", last_name: "Shobbrook", email: "dchalder2@addtoany.com", company: "Devcast", phone: "472-424-3551", position: "Account Executive",  last_login: "2 hours ago", status: true },
  { id: 34, first_name: "Evin", last_name: "Antoons", email: "eantoons3@ebay.com", company: "Trilia", phone: "321-196-7694", position: "Human Resources Manager",  last_login: "2 hours ago", status: false },
  { id: 35, first_name: "Strachan", last_name: "Aurlie", email: "rhaller4@vkontakte.ru", company: "Zoombeat", phone: "317-332-4304", position: "Financial Analyst",  last_login: "4 hours ago", status: true },
  { id: 36, first_name: "Liana", last_name: "Eskrick", email: "leskrick5@friendfeed.com", company: "Innojam", phone: "623-329-8993", position: "Systems Administrator III",  last_login: "3 hours ago", status: true },
  { id: 37, first_name: "Clarine", last_name: "Bellany", email: "cbellany6@yandex.ru", company: "Realcube", phone: "125-567-8364", position: "Engineer III",  last_login: "4 hours ago", status: false },
  { id: 38, first_name: "Armin", last_name: "Borth", email: "aborth7@reddit.com", company: "Zoombeat", phone: "305-799-2940", position: "Environmental Specialist",  last_login: "4 hours ago", status: false },
  { id: 39, first_name: "Phil", last_name: "Antonat", email: "pantonat8@sogou.com", company: "Oyope", phone: "148-853-6804", position: "Accountant I",  last_login: "4 hours ago", status: false },
  { id: 40, first_name: "Spense", last_name: "Dresse", email: "sdresse9@domainmarket.com", company: "Gabtype", phone: "593-567-2949", position: "Assistant Manager",  last_login: "4 hours ago", status: false },
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
                  <template #title>Target Audience</template>
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