<script setup>
const props = defineProps(['subMenu', 'currentRoute', 'openedMenu', 'toggleMenu'])
</script>

<template>
  <li v-for="(sub_child, csIndex) in subMenu" class="sidebar-dropdown-item" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    <a href='javascript:void(0)' class="sidebar-link" @click="toggleMenu(sub_child.name)">
      {{ sub_child.name }}
    </a>
  </li>
</template>

<style scoped>

</style>