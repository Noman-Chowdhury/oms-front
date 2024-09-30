<script setup>
import {useRolePermissionStore} from "@/stores/rolePermission";
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";

const rolePermission = useRolePermissionStore();

const route = useRoute();
const isEditMode = computed(() => !!route.params.roleId);

const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const toggleSelectAll = (permissionGroup, event) => {
  const isChecked = event.target.checked;
  permissionGroup.forEach(permission => {
    permission.checked = isChecked;
    togglePermission(permission, isChecked);
  });
}

const togglePermission = (permission, isChecked) => {
  if (isChecked) {
    if (!rolePermission.role.permissions.includes(permission.id)) {
      rolePermission.role.permissions.push(permission.id);
    }
  } else {
    rolePermission.role.permissions = rolePermission.role.permissions.filter(id => id !== permission.id);
  }
};

onMounted(async () => {
  await rolePermission.fetchAllPermissions()
  if (isEditMode.value) {
    rolePermission.roleId = route.params.roleId;
    await rolePermission.showData(rolePermission.roleId);
    // Loop through the object keys and arrays
    Object.keys(rolePermission.permissions).forEach(groupKey => {
      const permissionGroup = rolePermission.permissions[groupKey]; // Array of permissions for each group

      permissionGroup.forEach(permission => {
        // Pre-select permissions if they're part of the role's permissions
        permission.checked = rolePermission.role.permissions.includes(permission.id);
      });
    });
  }
})

const permissionGroups = computed(() => rolePermission.permissions || []);

const submitForm = async () => {
  event.preventDefault()
  if (rolePermission.roleId) {
    await rolePermission.updateData()
  } else {
    await rolePermission.storeData()
  }
}

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Role Info</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-6 col-lg-6 col-sm-6">
              <label class="form-label">Name</label>
              <input type="text" class="form-control form-control-sm" placeholder="Enter Role Name"
                     v-model="rolePermission.role.name">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Permissions</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xl-12 col-lg-12 col-md-12" v-for="(permissionGroup,index) in permissionGroups" :key="index">
              <table class="table table-borderless card" style="border: 1px solid #DEDEEB;">
                <tr class="row">
                  <td class="col" width="15%"
                      style="align-self:center !important; width: 15% !important; padding-right: 0">
                    <strong>{{ titleCase(index) }}</strong>
                  </td>
                  <td class="col" width="20%" style="align-self:center !important; width: 20% !important; padding: 0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" :id="'select-all-' + index"
                             @change="toggleSelectAll(permissionGroup, $event)">
                      <label class="form-check-label" :for="'select-all-' + index">
                        Select All
                      </label>
                    </div>
                  </td>
                  <td class="col" width="65%"
                      style="align-self:center !important;  width: 65% !important; padding-left: 0; padding-right: 0">
                    <div class="form-check" v-for="(permission,index2) in permissionGroup" :key="index2">
                      <input class="form-check-input" type="checkbox" :id="'permission-' + permission.id"
                             v-model="permission.checked" @change="togglePermission(permission, permission.checked)">
                      <label class="form-check-label" :for="'permission-' + permission.id">
                        {{ titleCase(permission.name) }}
                      </label>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-sm btn btn-primary" @click="submitForm">Save Access Control</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>