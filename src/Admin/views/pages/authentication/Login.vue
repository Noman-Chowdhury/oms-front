<script setup>
import {ref} from "vue";
import {axiosInstance} from "@/plugins/axiosInstance";
import {useToast} from "vue-toast-notification";
import Loader from "@/components/Loader.vue";
import {useRouter} from "vue-router";

const $toast = useToast({position: 'top-right'});
const router = useRouter();

const isLoading = ref(false);
const isPasswordShow = ref(false);

const credentials = ref({
  email: '',
  password: '',
  remember_me: '',
})

const login = async () => {
  event.preventDefault()
  isLoading.value = true;
  try {
    axiosInstance.post('/api/admin/login', credentials.value)
        .then((response) => {
          const resData = response.data;
          localStorage.setItem('_a_t', resData.data.access_token);
          localStorage.setItem('_a_u', JSON.stringify(resData.data.adminData));
          $toast.success(resData.message);
          router.push({name: 'adminDashboard'})
        }).catch((error) => {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          if (errors.hasOwnProperty(field)) {
            $toast.error(errors[field]);
          }
        }
      } else {
        $toast.error('Something went wrong!.');
        console.error('An error occurred:', error);
      }
    }).finally(() => {
      isLoading.value = false
    })
  } catch (error) {
    $toast.error('Something went wrong!.');
  }
}
</script>

<template>
  <div v-if="isLoading">
    <Loader/>
  </div>
  <div class="login-body">
    <div class="top justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/oms-logo-big.png" alt="Logo">
      </div>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Admin Login</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-user"></i></span>
          <input type="text" class="form-control" placeholder="Username or email address" v-model="credentials.email">
        </div>
        <div class="input-group mb-20">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input :type="[isPasswordShow ? 'text' : 'password']" class="form-control rounded-end" placeholder="Password"
                 v-model="credentials.password">
          <a role="button" class="password-show" @click="isPasswordShow = !isPasswordShow"><i class="fa-duotone"
                                                                                              :class="[isPasswordShow ? 'fa-eye-slash':'fa-eye']"></i></a>
        </div>
        <div class="d-flex justify-content-between mb-25">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="loginCheckbox"
                   v-model="credentials.remember_me">
            <label class="form-check-label text-white" for="loginCheckbox">
              Remember Me
            </label>
          </div>
          <router-link to="/reset-password" class="text-white fs-14">Forgot Password?</router-link>
        </div>
        <div class="text-center">
          <button class="btn btn-primary w-100 login-btn rounded" @click="login">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>