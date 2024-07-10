<script setup>
const props = defineProps(['data'])
</script>

<template>
  <div class="table-product-card">
    <div class="part-img">
      <img :src="data.image" alt="Image">
    </div>
    <div class="part-txt">
      <span class="product-name">{{ data.name }}</span>
      <span class="product-category">Category: {{ data.category_name }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>