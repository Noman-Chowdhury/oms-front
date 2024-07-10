<script setup>
import {ref} from "vue";

const isPasswordShow = ref(false)
</script>

<template>
  <div class="login-body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/logo-big.png" alt="Logo">
      </div>
      <router-link to="/"><i class="fa-duotone fa-house-chimney"></i></router-link>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Registration</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-user"></i></span>
          <input type="text" class="form-control" placeholder="Full Name">
        </div>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="input-group mb-20">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input :type="[isPasswordShow ? 'text' : 'password']" class="form-control rounded-end" placeholder="Password">
          <a role="button" class="password-show" @click="isPasswordShow = !isPasswordShow"><i class="fa-duotone" :class="[isPasswordShow ? 'fa-eye-slash':'fa-eye']"></i></a>
        </div>
        <div class="d-flex justify-content-between mb-25">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="loginCheckbox">
            <label class="form-check-label text-white" for="loginCheckbox">
              I agree <a href="#" class="text-white text-decoration-underline">Terms & Policy</a>
            </label>
          </div>
        </div>
        <button class="btn btn-primary w-100 login-btn">Sign up</button>
      </form>
      <div class="other-option">
        <p>Or continue with</p>
        <div class="social-box d-flex justify-content-center gap-20">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-google"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>