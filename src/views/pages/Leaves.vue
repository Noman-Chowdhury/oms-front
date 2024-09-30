<script setup>

import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import Loader from "@/components/Loader.vue";
import flatPickr from 'vue-flatpickr-component';

import 'flatpickr/dist/flatpickr.css';
import {useLeaveStore} from "@/stores/leave";
import {useLeaveTypeStore} from "@/stores/leaveTypes";
import {useUserInfoStore} from "@/stores/userInfoStore";

const table = ref(null);
const selectedItems = ref([]);
const userTable = ref([
  {label: "START DATE", key: "start_date"},
  {label: "END DATE", key: "end_date"},
  {label: "HALF DAY", key: "half_day",},
  {label: "STATUS", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);
const adminTable = ref([
  {label: "NAME", key: "nameImage", type: "component"},
  {label: "START DATE", key: "start_date"},
  {label: "END DATE", key: "end_date"},
  {label: "HALF DAY", key: "half_day",},
  {label: "STATUS", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
});

const leaveStore = useLeaveStore();
const leaveTypeStore = useLeaveTypeStore()
const userInfoStore = useUserInfoStore()

const submitForm = async () => {
  event.preventDefault()
  if (leaveStore.leaveId) {
    await leaveStore.updateData()
  } else {
    await leaveStore.storeData()
  }
}

onMounted(() => {
  leaveStore.fetchData()
  leaveTypeStore.fetchData()
})
</script>

<template>
  <div v-if="leaveStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-md-12" v-if="userInfoStore.user.is_employee">
      <div class="panel">
        <div class="panel-header">
          <h5>Leave Request Form</h5>
        </div>
        <div class="panel-body">
          <div class="row g3">
            <div class="col-md-3">
              <label class="form-label">Leave Type</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Leave Type"   v-model="leaveStore.leave.leave_type_id">
                <option value="">Select Leave Type</option>
                <option :value="leaveType.id" v-for="leaveType in leaveTypeStore.leaveTypes">{{ leaveType.name}}</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">From Date</label>
              <flat-pickr
                  v-model="leaveStore.leave.start_date"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="date"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">To Date</label>
              <flat-pickr
                  v-model="leaveStore.leave.end_date"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="date"
              />
            </div>
            <div class="col-md-3" v-if="leaveStore.leave.start_date === leaveStore.leave.end_date">
              <label class="form-label">Leave For</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Leave For"   v-model="leaveStore.leave.leave_for">
                <option value="">Full Day</option>
                <option value="first_half">First Half</option>
                <option value="second_half">Second Half</option>
              </select>
            </div>
            <div class="col-md-12">
              <label class="form-label">Reason</label>
              <textarea class="form-control" id="" cols="30" rows="2"   v-model="leaveStore.leave.reason"></textarea>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-sm btn btn-primary" @click="submitForm">Submit Application</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" v-if="userInfoStore.hasPermission('leave application list')">
      <div class="panel">
        <div class="panel-header">
          <h5>
            Leave Request List
          </h5>
        </div>
        <div class="panel-body">
          <data-table
              ref="table"
              :data="leaveStore.leaves"
              :columns="userInfoStore.user.is_employee ? userTable : adminTable"
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