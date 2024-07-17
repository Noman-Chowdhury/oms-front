<script setup>
import {ref} from "vue";

const currentYear = ref('');
currentYear.value = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    <p>Copyright© {{ currentYear}} <a href="https://smartmux.com">SmartMux Limited</a>. All Rights Reserved.</p>
  </div>
</template>

<style scoped>

</style>