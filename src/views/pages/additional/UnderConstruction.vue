<script setup>

</script>

<template>
  <div class="panel under-construction-panel">
    <div class="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="part-img">
        <img src="@/assets/images/under-construction.png" alt="coming-soon">
      </div>
      <div class="part-txt">
        <h2>Under Construction</h2>
        <p>To make things right we need some time to rebuild</p>
        <router-link :to="{ name: 'dashboard_index' }" class="btn btn-primary py-2 px-5 rounded-pill">Go To Home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>