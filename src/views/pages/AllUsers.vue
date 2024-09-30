<script setup>

import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/users";
import Loader from "@/components/Loader.vue";
import {useUserInfoStore} from "@/stores/userInfoStore";
import {useRolePermissionStore} from "@/stores/rolePermission";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const table = ref(null);
const selectedItems = ref([]);
const tableColumns = ref([
  {label: "Name", key: "name", sortable: true},
  {label: "Email", key: "email", sortable: true},
  {label: "Status", key: "status", sortable: false, type: 'html'},
  {label: "Action", key: "action", sortable: false, type: 'component', align: 'right'},
]);

const userStore = useUserStore();
const permissionStore = useUserInfoStore()
const roleStore = useRolePermissionStore()

const submitUserForm = async () => {
  event.preventDefault()
  if (userStore.userId) {
    await userStore.updateData()
  } else {
    await userStore.storeData()
  }
}

onMounted(() => {
  userStore.fetchData()
  roleStore.fetchData()
})
</script>

<template>
  <div v-if="userStore.loading">
    <Loader/>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-4 d-flex">
          <div class="panel flex-grow-1">
            <div class="panel-header">
              <h5>
                User Form
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="userStore.user.name">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Name</label>
                  <input type="email" class="form-control form-control-sm" placeholder="Enter Email"
                         v-model="userStore.user.email">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Status</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Select Status"
                          v-model="userStore.user.status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Role</label>
                  <v-select
                      taggable
                      multiple
                      label="name"
                      :options="roleStore.roles"
                      :reduce="role => role.id"
                      v-model="userStore.user.roles"
                      placeholder="Select Roles"
                  />
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end" v-if="permissionStore.hasPermission('add new user') || permissionStore.hasPermission('edit user')">
                  <button class="btn btn-primary" @click="submitUserForm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8" v-if="permissionStore.hasPermission('show user list')">
          <div class="panel">
            <div class="panel-header">
              <h5>
                User List
              </h5>
            </div>
            <div class="panel-body">
              <data-table
                  ref="table"
                  :data="userStore.users"
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
    </div>
  </div>
</template>

<style scoped>

</style>