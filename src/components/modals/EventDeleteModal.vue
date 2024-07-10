<script setup>
const props = defineProps(['closeModal', 'handleDeleteEvent']);
</script>

<template>
  <div class="modal fade" id="eventDeleteModal" role="dialog" aria-modal="true" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title h4">Confirm Delete</div>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-body"><p class="delete-confirmation">Are you sure you want to delete the event?</p></div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" class="btn btn-secondary" @click="closeModal">Cancel</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="handleDeleteEvent">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>