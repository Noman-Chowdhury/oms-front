<script setup>

</script>

<template>
  <h3 class="panel-title">Login</h3>
  <div class="login-body login-body-2">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/logo-black.png" alt="Logo">
      </div>
      <router-link to="/"><i class="fa-duotone fa-house-chimney"></i></router-link>
    </div>
    <div class="bottom">
      <form>
        <div class="input-group mb-25">
          <input type="text" class="form-control" placeholder="Username or email address">
          <span class="input-group-text"><i class="fa-regular fa-user"></i></span>
        </div>
        <div class="input-group mb-20">
          <input type="password" class="form-control" placeholder="Password">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
        </div>
        <div class="d-flex justify-content-between mb-25">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="loginCheckbox">
            <label class="form-check-label text-white" for="loginCheckbox">
              Remember Me
            </label>
          </div>
          <router-link to="/reset-password" class="text-white fs-14">Forgot Password?</router-link>
        </div>
        <button class="btn btn-primary w-100 login-btn">Login</button>
      </form>
      <div class="other-option">
        <p class="mb-0">Don't have an account? <router-link to="/registration-2" class="text-white text-decoration-underline">create</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>