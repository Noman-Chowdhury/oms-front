<script setup>
const props = defineProps(['element'])
</script>

<template>
  <div class="">
    <span class="text-primary"><i :class="`${element.icon}`"></i></span>
    {{ element.name }}
  </div>
</template>

<style scoped>

</style>