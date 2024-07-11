<script setup>
import {onMounted, onUpdated, ref} from "vue";
import {OverlayScrollbars} from "overlayscrollbars";

const mainContentMinHeight = ref(0);

onMounted(() => {
  document.getElementById('app').style.display = 'inherit';

  const windowHeight = window.innerHeight;
  mainContentMinHeight.value = windowHeight - 70;

  if (window.innerWidth < 1800) {
    mainContentMinHeight.value = windowHeight - 60;
  }
  if (window.innerWidth < 992) {
    mainContentMinHeight.value = windowHeight - 50;
  }

})

onUpdated(() => {
  document.getElementById('app').style.display = 'inherit';
});
</script>

<template>
  <div class="main-content" :style="{ 'min-height': mainContentMinHeight + 'px' }">
    <slot/>
  </div>
</template>

<style scoped>

</style>