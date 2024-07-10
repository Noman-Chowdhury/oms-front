<script setup>
import {ref} from "vue";

const isPasswordShow = ref(false);
</script>

<template>
  <div class="login-body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/logo-big.png" alt="Logo">
      </div>
      <router-link :to="{ name: 'dashboard_index' }"><i class="fa-duotone fa-house-chimney"></i></router-link>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Sign in</h3>
      <div class="login-status">
        <div class="msg-success alert alert-success py-2 px-3 rounded mb-20 fs-14"><i class="fa-regular fa-check me-2"></i> Login Successfully</div>
        <div class="msg-error alert alert-danger py-2 px-3 rounded mb-20 fs-14"><i class="fa-regular fa-circle-exclamation me-2"></i> Invalid Username/Password</div>
      </div>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-user"></i></span>
          <input type="text" class="form-control" placeholder="Username or email address">
        </div>
        <div class="input-group mb-20">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input :type="[isPasswordShow ? 'text' : 'password']" class="form-control rounded-end" placeholder="Password">
          <span class="password-show" @click="isPasswordShow = !isPasswordShow"><i class="fa-duotone" :class="[isPasswordShow ? 'fa-eye-slash':'fa-eye']"></i></span>
        </div>
        <div class="d-flex justify-content-between mb-25">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="loginCheckbox">
            <label class="form-check-label text-white" for="loginCheckbox">
              Remember Me
            </label>
          </div>
          <router-link :to="{name: 'reset_password'}" class="text-white fs-14">Forgot Password?</router-link>
        </div>
        <button class="btn btn-primary w-100 login-btn">Sign in</button>
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