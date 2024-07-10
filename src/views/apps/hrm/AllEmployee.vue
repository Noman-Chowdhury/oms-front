<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import TableAction from "@/components/DatatableAction/AllEmployeeTableAction.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import AllEmployeeTableHeaderComponent from "@/components/employee/AllEmployeeTableHeaderComponent.vue";
import TableFilterOption from "@/components/employee/TableFilterOption.vue";

const actionComponent = shallowRef(TableAction);

const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Action", key: "action", type: "component" },
  { label: "Employee ID", key: "employee_id", sortable: true },
  { label: "Photo", key: "photo", sortable: false, type: "image" },
  { label: "Name", key: "name", sortable: true },
  { label: "Section", key: "section", sortable: true },
  { label: "Phone", key: "phone", sortable: true },
  { label: "Present Address", key: "present_address", sortable: true },
  { label: "Status", key: "status", sortable: false, type: 'html' },
]);

const tableData = ref([
  { id: 1, action: actionComponent, employee_id: 'ID-100221009', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 2, action: actionComponent, employee_id: 'ID-100221008', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 3, action: actionComponent, employee_id: 'ID-100221007', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 4, action: actionComponent, employee_id: 'ID-100221006', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 5, action: actionComponent, employee_id: 'ID-100221005', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 6, action: actionComponent, employee_id: 'ID-100221004', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 7, action: actionComponent, employee_id: 'ID-100221003', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 8, action: actionComponent, employee_id: 'ID-1002210025', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 9, action: actionComponent, employee_id: 'ID-1002210024', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 10, action: actionComponent, employee_id: 'ID-1002210023', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 11, action: actionComponent, employee_id: 'ID-1002210033', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
  { id: 12, action: actionComponent, employee_id: 'ID-1002210034', name: 'Shaikh Abu Dardah', photo: new URL ('/src/assets/images/avatar-2.png', import.meta.url), section: 'Development', phone: '+1 234 567 890', present_address: '75 York Road OUTGATE LA22 6HL', status: '<span class="active-mark"><i class="fa-regular fa-check"></i></span> Active' },
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
          <template #title>All Employee</template>
          <template #filter-column>
            <AllEmployeeTableHeaderComponent />
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