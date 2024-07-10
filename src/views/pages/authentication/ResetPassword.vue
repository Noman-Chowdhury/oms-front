<script setup>

</script>

<template>
  <div class="login-body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/logo-big.png" alt="Logo">
      </div>
      <router-link :to="{ name: 'dashboard_index'}"><i class="fa-duotone fa-house-chimney"></i></router-link>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Reset Password</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
          <input type="text" class="form-control" placeholder="Username or email address">
        </div>
        <button class="btn btn-primary w-100 login-btn">Get Link</button>
      </form>
      <div class="other-option">
        <p class="mb-0">Remember the password? <router-link :to="{name: 'login' }">Login</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>