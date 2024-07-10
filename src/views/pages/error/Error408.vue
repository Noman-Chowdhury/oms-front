<script setup>

</script>

<template>
  <div class="panel error-panel">
    <div class="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="part-img">
        <img src="@/assets/images/error-408.png" alt="408">
      </div>
      <div class="part-txt text-center">
        <h2 class="error-subtitle">Request Time-Out</h2>
        <router-link :to="{name: 'dashboard_index'}" class="btn btn-primary py-2 px-5 rounded-pill">Go to Home Page</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>