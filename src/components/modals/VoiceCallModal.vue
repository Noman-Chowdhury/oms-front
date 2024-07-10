<script setup>
const props = defineProps(['closeModal']);

</script>

<template>
  <div class="modal fade" id="voiceCallModal" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog call-modal modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="voice-call">
            <div class="user">
              <div class="avatar avatar-lg">
                <img src="@/assets/images/avatar-2.png" alt="User">
              </div>
              <span class="user-name">Amelie Harris</span>
              <span class="call-status">Calling...</span>
            </div>
            <div class="call-option">
              <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-microphone-slash"></i></button>
              <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-volume"></i></button>
              <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-user-plus"></i></button>
              <button class="btn btn-sm rounded-circle btn-icon btn-danger" data-bs-dismiss="modal" @click="closeModal"><i class="fa-light fa-phone-hangup"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>