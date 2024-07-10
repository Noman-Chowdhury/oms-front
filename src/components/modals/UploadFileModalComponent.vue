<script setup>
import DropzoneComponent from "@/components/form/DropzoneComponent.vue";
</script>

<template>
  <div class="modal fade" id="fileUploadModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
<!--          <form action="/file-upload" class="dropzone" id="file-manager-upload"></form>-->
          <DropzoneComponent :title="'Upload File'"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-success">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>