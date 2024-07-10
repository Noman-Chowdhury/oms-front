<script setup>

</script>

<template>
  <div class="modal fade" id="createFolder" tabindex="-1" aria-labelledby="createFolderLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="createFolderLabel">Create New Folder</h1>
          <button type="button" class="btn btn-sm btn-outline-primary btn-icon" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-xmark"></i></button>
        </div>
        <div class="modal-body">
          <form>
            <label for="newFolderName" class="form-label">Folder Name</label>
            <input type="text" id="newFolderName" class="form-control" placeholder="Enter Folder Name" required>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-success">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>