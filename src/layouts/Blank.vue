<script setup>
import {onBeforeMount} from "vue";

onBeforeMount(() => {
  const body = document.body;
  document.body.classList.remove('body-padding', 'body-p-top');
});
</script>

<template>
<slot></slot>
</template>

<style>
@import "@/assets/css/email.css";
</style>