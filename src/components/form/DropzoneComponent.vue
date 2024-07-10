<script setup>
import {onMounted} from 'vue';
import Dropzone from 'dropzone';

const props = defineProps(['title'])

onMounted(() => {
  let myDropzone = new Dropzone("#file-manager-upload", {
    dictDefaultMessage: '<i class="fa-light fa-cloud-arrow-up"></i><span>Drop a file here or click to upload</span>'
  });

  myDropzone.on("addedfile", file => {
  });

})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <template v-if="title">{{ title }}</template>
      <template v-else>Dropzone</template>
    </div>
    <div class="card-body">
      <form action="/file-upload" class="dropzone dz-component" id="file-manager-upload"></form>
    </div>
  </div>
</template>

<style scoped>

</style>
