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
<div class="text-center">
  <span class="primary-font fw-bold">{{ employee.designation }}</span><br>
  <span class="primary-font">{{ employee.department }}</span>
</div>
</template>

<style scoped>

</style>