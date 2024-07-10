<script setup>
import {ref} from "vue";

const currentYear = ref('');
currentYear.value = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    <p>Copyright© {{ currentYear}} All Rights Reserved By <span class="text-primary">Digiboard</span></p>
  </div>
</template>

<style scoped>

</style>