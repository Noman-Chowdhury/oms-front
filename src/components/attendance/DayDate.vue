<script setup>
import {defineProps} from "vue";

const props = defineProps({
  attendance: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="d-flex align-items-center ">
    <div class="avatar primary-background circleBorder align-content-center">
      <span class="date-font">{{ props.attendance.date }}</span>
    </div>
    <div>
      <span class="primary-font fw-bold">&nbsp;&nbsp;{{ props.attendance.day }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>