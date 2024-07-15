<script setup>
import {onMounted, ref} from 'vue';
import {useUpdatePassword} from "@/stores/passwordStore";
import Loader from "@/components/Loader.vue";
import {useRouter} from "vue-router";

const passwordStore = useUpdatePassword();
const email = ref(passwordStore.email)
const router = useRouter()

const props = defineProps({
  userType: {
    type: String,
    required: true,
    default: 'users'
  },
});

const getCode = async ()=>{
  event.preventDefault();
  await passwordStore.resetPassword(email.value, props.userType)
      .then(()=>{
        // router.push({name: 'two_factor'})
      })
}

onMounted(()=>{

})
</script>

<template>
  <div v-if="passwordStore.loading">
    <Loader/>
  </div>
  <div class="login-body">
    <div class="top justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/oms-logo-big.png" alt="Logo">
      </div>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Reset Password</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
          <input type="text" class="form-control" placeholder="Username or email address" v-model="email">
        </div>
        <div class="text-center">
          <button class="btn btn-primary login-btn" @click="getCode">Get Code</button>
        </div>
      </form>
      <div class="other-option">
        <p class="mb-0">Remember the password? <router-link :to="{name: 'login' }">Login</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>