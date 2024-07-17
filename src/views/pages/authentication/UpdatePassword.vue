<script setup>

import {onMounted, ref} from "vue";
import {useUpdatePassword} from "@/stores/passwordStore";
import Swal from "sweetalert2";
import {useRouter} from "vue-router";
import Loader from "@/components/Loader.vue";

const passStore = useUpdatePassword()
const router = useRouter()

const cred = ref({
  password: '',
  confirm_password: ''
})

const updatePassword = async () => {
  event.preventDefault()
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
  if (cred.value.password.length < 8) {
    Swal.fire({
      text: "Password Must be At least 8 character",
      icon: "error",
      confirmButtonText: "Try Again",
      customClass: {
        closeButton: 'btn btn-sm btn-icon btn-danger',
      },
      showCloseButton: false,
    });
    return false
  }
  await passStore.updatePassword(cred.value)
}

onMounted(() => {
  if (!passStore.token) {
    router.push({name: 'two_factor'})
  }
})

</script>

<template>
  <div v-if="passStore.loading">
    <Loader/>
  </div>
  <div class="login-body">
    <div class="top justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/oms-logo-big.png" alt="Logo">
      </div>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Update Password</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input type="password" class="form-control left-aligned" placeholder="New Password" v-model="cred.password">
        </div>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input type="password" class="form-control left-aligned" placeholder="Confirm New Password"
                 v-model="cred.confirm_password">
        </div>
        <div class="text-center">
          <button class="btn btn-primary login-btn" @click="updatePassword">Update Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>