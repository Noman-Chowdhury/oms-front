<script setup>
import {defineProps} from "vue";

const props = defineProps({
  employee: {
    type: Object,
    required: true
  }
});
</script>

<template>
<div class="d-flex">
  <div class="avatar">
    <img :src="employee.photo_url" alt="Image">
  </div>
  <div>
    <span class="primary-font fw-bold">{{ employee.name}}</span><br>
    <span class="primary-font">@{{ employee.employee_id}}</span>
  </div>
</div>
</template>

<style scoped>

</style>