<script setup>
import {onMounted, ref} from "vue";
import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import Loader from "@/components/Loader.vue";
import {designationStore} from "@/stores/designation";
import {useDepartmentStore} from "@/stores/department";
import {useShiftStore} from "@/stores/shift";
import {useLeaveTypeStore} from "@/stores/leaveTypes";
import {useUserInfoStore} from "@/stores/userInfoStore";

const desTable = ref(null);
const depTable = ref(null);
const shiftTable = ref(null);
const selectedItems = ref([]);
const depSelectedItems = ref([]);
const shiftSelectedItems = ref([]);
const isSearch = ref(true);

const desTableColumns = ref([
  {label: "Name", key: "name", sortable: true},
  {label: "Status", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const shiftTableColumns = ref([
  {label: "Name", key: "name", sortable: true},
  {label: "Start Time", key: "start_time", sortable: true},
  {label: "End Time", key: "end_time", sortable: true},
  {label: "Status", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);


const desStore = designationStore()
const depStore = useDepartmentStore()
const shiftStore = useShiftStore()
const leaveTypeStore = useLeaveTypeStore()
const permissionStore = useUserInfoStore()

const submitDepartmentForm = async () => {
  event.preventDefault()
  if (depStore.departmentId) {
    await depStore.updateDepartment()
  } else {
    await depStore.storeDepartment()
  }
}
const submitDesignationForm = async () => {
  event.preventDefault()
  if (desStore.designationId) {
    await desStore.updateDesignation()
  } else {
    await desStore.storeDesignation()
  }
}
const submitShiftForm = async () => {
  event.preventDefault()
  if (shiftStore.shiftId) {
    await shiftStore.updateShift()
  } else {
    await shiftStore.storeShift()
  }
}
const submitLeaveTypeForm = async () => {
  event.preventDefault()
  if (leaveTypeStore.leaveTypeId) {
    await leaveTypeStore.updateData()
  } else {
    await leaveTypeStore.storeData()
  }
}

onMounted(() => {
  desStore.fetchDesignations()
  depStore.fetchDepartments()
  shiftStore.fetchShifts()
  leaveTypeStore.fetchData()
})
</script>

<template>
  <div class="row">
    <!--    Department-->
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-4 d-flex">
          <div class="panel flex-grow-1">
            <div class="panel-header primary-header">
              <h5>
                Department Form
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="depStore.department.name">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Status</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Select Status"
                          v-model="depStore.department.status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end"  v-if="permissionStore.hasPermission('add new department') || permissionStore.hasPermission('edit department')">
                  <button class="btn btn-primary" @click="submitDepartmentForm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="panel">
            <div class="panel-header primary-header">
              <h5>
                Department List
              </h5>
            </div>
            <div class="panel-body">
              <data-table
                  ref="depTable"
                  :data="depStore.departments"
                  :columns="desTableColumns"
                  :selectedItems="depSelectedItems"
                  :customHeader="true"
                  itemsPerPageCount = "3"
                  @update:selectedItems="depSelectedItems = $event"
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
    </div>
    <!--    Designation-->
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-4 d-flex">
          <div class="panel flex-grow-1">
            <div class="panel-header primary-header">
              <h5>
                Designation Form
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Designation Name"
                         v-model="desStore.designation.name">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Status</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Select Status"
                          v-model="desStore.designation.status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end"  v-if="permissionStore.hasPermission('add new designation') || permissionStore.hasPermission('edit designation')">
                  <button class="btn btn-primary" @click="submitDesignationForm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="panel">
            <div class="panel-header primary-header">
              <h5>
                Designation List
              </h5>
            </div>
            <div class="panel-body">
              <data-table
                  ref="desTable"
                  :data="desStore.designations"
                  :columns="desTableColumns"
                  :selectedItems="selectedItems"
                  :customHeader="true"
                  itemsPerPageCount = "3"
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
    </div>
    <!--    Shift-->
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-4 d-flex">
          <div class="panel flex-grow-1">
            <div class="panel-header primary-header">
              <h5>
                Shift Form
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Designation Name"
                         v-model="shiftStore.shift.name">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Start Time</label>
                  <input type="time" class="form-control" v-model="shiftStore.shift.start_time">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">End Time</label>
                  <input type="time" class="form-control" v-model="shiftStore.shift.end_time">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Status</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Select Status"
                          v-model="shiftStore.shift.status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end"  v-if="permissionStore.hasPermission('add new shift') || permissionStore.hasPermission('edit shift')">
                  <button class="btn btn-primary" @click="submitShiftForm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="panel">
            <div class="panel-header primary-header">
              <h5>
                Shift List
              </h5>
            </div>
            <div class="panel-body">
              <data-table
                  ref="shiftTable"
                  :data="shiftStore.shifts"
                  :columns="shiftTableColumns"
                  :selectedItems="shiftSelectedItems"
                  :customHeader="true"
                  itemsPerPageCount = "5"
                  @update:selectedItems="shiftSelectedItems = $event"
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
    </div>
    <!--    Leave Type-->
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-4 d-flex">
          <div class="panel flex-grow-1">
            <div class="panel-header primary-header">
              <h5>
                Leave Type Form
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="leaveTypeStore.leaveType.name">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Status</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Select Status"
                          v-model="leaveTypeStore.leaveType.status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end"   v-if="permissionStore.hasPermission('add new leave type') || permissionStore.hasPermission('edit leave type')">
                  <button class="btn btn-primary" @click="submitLeaveTypeForm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="panel">
            <div class="panel-header primary-header">
              <h5>
                Leave Type List
              </h5>
            </div>
            <div class="panel-body">
              <data-table
                  ref="depTable"
                  :data="leaveTypeStore.leaveTypes"
                  :columns="desTableColumns"
                  :selectedItems="depSelectedItems"
                  :customHeader="true"
                  itemsPerPageCount = "3"
                  @update:selectedItems="depSelectedItems = $event"
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
    </div>
  </div>
</template>

<style scoped>

</style>