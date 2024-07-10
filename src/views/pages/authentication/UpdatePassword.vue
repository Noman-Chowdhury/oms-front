<script setup>

</script>

<template>
  <div class="login-body">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="@/assets/images/logo-big.png" alt="Logo">
      </div>
      <router-link :to="{name: 'dashboard_index'}"><i class="fa-duotone fa-house-chimney"></i></router-link>
    </div>
    <div class="bottom">
      <h3 class="panel-title">Update Password</h3>
      <form>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="New Password">
        </div>
        <div class="input-group mb-25">
          <span class="input-group-text"><i class="fa-regular fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Confirm New Password">
        </div>
        <button class="btn btn-primary w-100 login-btn">Update Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>