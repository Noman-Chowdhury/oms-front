<script setup>
const props = defineProps(['element'])
</script>

<template>
<span class="team-list mb-2">
  <span class="avatar"><img :src="element.avatar" alt="Image"></span>
  <span class="part-txt">
    <span class="name">{{ element.name }}</span>
    <span class="position">{{ element.position }}</span>
  </span>
</span>
</template>

<style scoped>

</style>