<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
</script>

<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <slot/>
    </transition>
  </Teleport>
</template>

<style scoped>

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
