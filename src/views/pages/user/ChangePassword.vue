<script setup>
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import {useUpdatePassword} from "@/stores/passwordStore";
import {ref} from "vue";
import Swal from "sweetalert2";

const passwordStore = useUpdatePassword();
const props = defineProps({
  userType: {
    type: String,
    required: true,
    default: 'user'
  },
});

const cred = ref({
  password: '',
  confirm_password: ''
})

const old_password = ref('')

const updatePassword = async () => {
  event.preventDefault()
  if (!old_password) {
    Swal.fire({
      text: "Old Password Must Need",
      icon: "error",
      confirmButtonText: "Try Again",
      customClass: {
        closeButton: 'btn btn-sm btn-icon btn-danger',
      },
      showCloseButton: false,
    });
    return false
  }
  if (cred.value.password !== cred.value.confirm_password) {
    Swal.fire({
      text: "Password Does Not Match",
      icon: "error",
      confirmButtonText: "Try Again",
      customClass: {
        closeButton: 'btn btn-sm btn-icon btn-danger',
      },
      showCloseButton: false,
    });
    return false
  }
  await passwordStore.changeOldPassword(old_password.value, cred.value, props.userType)
  old_password.value = ''
  cred.value = ref({})
}

</script>

<template>
  <DashboardBreadcrumb>
    <template #title>Change Password</template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-body">
          <form>
            <div class="profile-edit-tab-title">
              <h6>Change Password</h6>
            </div>
            <div class="social-information">
              <div class="row g-3">
                <div class="col-12">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                    <input type="password" class="form-control" placeholder="Current Password" v-model="old_password">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                    <input type="url" class="form-control" placeholder="New Password" v-model="cred.password">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa-light fa-lock"></i></span>
                    <input type="url" class="form-control" placeholder="Confirm Password" v-model="cred.confirm_password">
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary" @click="updatePassword">Save Changes</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>