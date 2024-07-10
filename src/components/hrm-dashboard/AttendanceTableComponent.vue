<script setup>
import {onMounted, ref, shallowRef} from "vue";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import HrmAttendanceTableAction from "@/components/DatatableAction/HrmAttendanceTableAction.vue";

const hrmAttendanceActionComponent = shallowRef(HrmAttendanceTableAction);

const table = ref(null);
const selectedItems = ref([]);
const search = ref('');

const tableColumns = ref([
  { label: "S.No", key: "id" },
  { label: "Employee", key: "name", sortable: true },
  { label: "Status", key: "status", type: "html" },
  { label: "Check In", key: "check_in", sortable: true },
  { label: "Check Out", key: "check_out", sortable: true },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: '01', name: 'Diane Nolan', status: '<span class="badge bg-primary rounded px-2">Present</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
  { id: '02', name: 'Paul Reynolds', status: '<span class="badge bg-danger rounded px-2">Absent</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
  { id: '03', name: 'Adela Perez', status: '<span class="badge bg-primary rounded px-2">Present</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
  { id: '04', name: 'Logan van', status: '<span class="badge bg-primary rounded px-2">Present</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
  { id: '05', name: 'Diane Nolan', status: '<span class="badge bg-primary rounded px-2">Present</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
  { id: '06', name: 'Diane Nolan', status: '<span class="badge bg-primary rounded px-2">Present</span>', check_in: '09:30 am', check_out: "06:30 PM", action: hrmAttendanceActionComponent },
]);

const dtSearch = (() => {
  table.value.updateSearch(search.value)
});

onMounted(() => {
})
</script>

<template>
  <div class="col-xxl-6 col-md-8">
    <div class="panel">
      <div class="panel-header">
        <h5>Attendance</h5>
        <div class="dataTables_filter">
          <label>
            <input type="search" v-model="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="myTable" @input="dtSearch">
          </label>
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