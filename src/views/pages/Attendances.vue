<script setup>

import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/users";
import Loader from "@/components/Loader.vue";
import {useAttendanceStore} from "@/stores/attendance";

const table = ref(null);
const selectedItems = ref([]);
const tableColumns = ref([
  {label: "NAME", key: "nameImage", type: "component"},
  {label: "DATE", key: "full_date"},
  {label: "CHECK-IN", key: "checkIn", type: "component"},
  {label: "CHECK-OUT", key: "checkOut", type: "component"},
  {label: "WORKING HOURS", key: "working_hours", sortable: true},
  {label: "STATUS", key: "status", sortable: false, type: 'html'},
  // {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const attendanceStore = useAttendanceStore();

onMounted(() => {
  attendanceStore.fetchData()
})
</script>

<template>
  <div v-if="attendanceStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>
            User List
          </h5>
        </div>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="attendanceStore.attendances"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              @update:selectedItems="selectedItems = $event"
          >
            <template #cell(action)="slotProps">
              <component
                  :is="slotProps.row.action.component"
                  v-bind="slotProps.row.action.props"
              />
            </template>
            <template #filterOption="{perPageOptions, updatePerPage}">
              <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>