<script setup>

import {useCurrentTime} from "@/composable/useCurrentTime";
import {useCurrentLocation} from "@/composable/useCurrentLocation";
import {useAttendanceStore} from "@/stores/attendance";
import {onMounted, ref} from "vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import DataTable from "@/components/datatable/DigiDataTable.vue";

const {currentTime} = useCurrentTime()
const location = useCurrentLocation()
const attendanceStore = useAttendanceStore()
attendanceStore.attendance.address = location.locationName
attendanceStore.attendance.latitude = location.latitude
attendanceStore.attendance.longitude = location.longitude

const currentMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
const table = ref(null);
const selectedItems = ref([]);

const tableColumns = ref([
  {label: currentMonthName, key: "dayDate", sortable: true, type: 'component', customClass: 'custom-table-header-primary'},
  {label: "Check-In", key: "check_in", sortable: true},
  {label: "Check-Out", key: "check_out", sortable: true},
  {label: "Working Hours", key: "working_hours", sortable: true},
  {label: "Status", key: "status", sortable: false, type: 'html'},
  // {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const addAttendance = async () => {
  await attendanceStore.store()
}

onMounted(() => {
  attendanceStore.fetchData();

})

</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel">
        <div class="panel-body">
          <h1 class="primary-font text-center fw-bolder timerFont"> {{ currentTime.toLocaleTimeString() }}</h1>
          <p class="text-center">{{ location.locationName }}</p>
          <div class="text-center">
            <button class="btn btn-primary attendanceButton" v-if="attendanceStore.entered && !attendanceStore.entered" @click="addAttendance">Click
              To Exit
            </button>
            <button class="btn btn-primary attendanceButton" v-if="attendanceStore.entered && attendanceStore.entered" >Attendance Updated
            </button>
            <button class="btn btn-primary attendanceButton" v-else @click="addAttendance">Click To Enter</button>
            <div class="mt-4 mb-2 text-center">
              <span class="summaryCount rightMargin20">Total: 124 Hrs</span>
              <span class="summaryCount rightMargin20">Total: 124 Hrs</span>
              <span class="summaryCount">Total: 124 Hrs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <div class="panel">
        <div class="panel-header">
          <h5 class="primary-font">Attendance</h5><br>
          <span><i class="fa-light fa-timer"></i> This Month</span>
        </div>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="attendanceStore.attendances"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              customHeader="true"
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
    <div class="col-md-3">
      <div class="panel">
        <div class="panel-header">
          <h5 class="primary-font">Recent Activity</h5>
        </div>
        <div class="panel-body">
          <ol class="activity-feed">
            <li class="feed-item">
              <time class="date" datetime="9-25">Leave Approval Request</time>
<!--              <span class="text">Responded to need <a href="#">From Majharul Huq asked Leave on Monday 12 June 2024</a></span>-->
              <span class="text">From Majharul Huq asked Leave on Monday 12 June 2024</span>
            </li>
            <li class="feed-item">
              <time class="date" datetime="9-25">Leave Approval Request</time>
<!--              <span class="text">Responded to need <a href="#">From Majharul Huq asked Leave on Monday 12 June 2024</a></span>-->
              <span class="text">From Majharul Huq asked Leave on Monday 12 June 2024</span>
            </li>
            <li class="feed-item">
              <time class="date" datetime="9-25">Leave Approval Request</time>
<!--              <span class="text">Responded to need <a href="#">From Majharul Huq asked Leave on Monday 12 June 2024</a></span>-->
              <span class="text">From Majharul Huq asked Leave on Monday 12 June 2024</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>