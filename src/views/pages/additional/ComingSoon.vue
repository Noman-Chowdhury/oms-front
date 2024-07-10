<script setup>

</script>

<template>
  <div class="panel coming-soon-panel">
    <div class="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="part-img">
        <img src="@/assets/images/coming-soon.png" alt="coming-soon">
      </div>
      <div class="part-txt">
        <router-link :to="{ name: 'dashboard_index' }" class="btn btn-primary py-2 px-5 rounded-pill">Go To Home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>