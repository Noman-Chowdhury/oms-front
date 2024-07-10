<script setup>
import {onMounted, shallowRef, ref} from "vue";
import {useRouter} from "vue-router";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import AttendanceTableAction from "@/components/DatatableAction/AttendanceTableAction.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import AttendanceTableHeaderComponent from "@/components/attendance/AttendanceTableHeaderComponent.vue";
import TableFilterOption from "@/components/attendance/AttendanceTableFilterOption.vue";

const attendanceActionComponent = shallowRef(AttendanceTableAction);

const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Date", key: "date", sortable: true },
  { label: "Name", key: "name", sortable: true },
  { label: "Employee ID", key: "employee_id", sortable: true },
  { label: "Division", key: "division", sortable: true },
  { label: "Check In - Check Out", key: "check_in_out", sortable: true },
  { label: "Status", key: "status", type: "html" },
  { label: "Shift", key: "shift" },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 2, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 3, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 4, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 5, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 6, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 7, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 8, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 9, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 10, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 11, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
  { id: 12, date: '12 Feb, 2023', name: 'Isabel Mellor', employee_id: '400001', division: 'Production Staff', check_in_out: "08:30 AM - 04:30 PM", status: '<span class="badge bg-success rounded">On Time</span>', shift: 'B', action: attendanceActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

const downloadPdf = (() => {
  table.value.downloadPdfFile()
})

onMounted(() => {
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>Attendance</template>
          <template #filter-column>
            <AttendanceTableHeaderComponent />
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
              <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage" :downloadPdf="downloadPdf"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>