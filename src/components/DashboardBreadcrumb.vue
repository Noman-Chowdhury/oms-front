<script setup>

</script>

<template>
  <div class="dashboard-breadcrumb mb-25">
    <h2>
      <slot name="title" />
    </h2>
    <div class="btn-box">
      <slot name="buttons" />
    </div>
  </div>
</template>

<style scoped>

</style>