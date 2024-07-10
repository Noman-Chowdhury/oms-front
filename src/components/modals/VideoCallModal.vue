<script setup>
const props = defineProps(['closeModal']);
</script>

<template>
  <div class="modal fade" id="videoCallModal" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog call-modal modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="video-call">
            <div class="user">
              <div class="user-preview">
                <img src="@/assets/images/avatar-big.jpg" alt="User">
              </div>
              <div class="part-txt">
                <span class="user-name">Amelie Harris</span>
                <span class="call-status">Calling...</span>
              </div>
            </div>
            <div class="bottom">
              <div class="call-option">
                <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-microphone-slash"></i></button>
                <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-video-slash"></i></button>
                <button class="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i class="fa-light fa-user-plus"></i></button>
                <button class="btn btn-sm rounded-circle btn-icon btn-danger" data-bs-dismiss="modal" @click="closeModal"><i class="fa-light fa-phone-hangup"></i></button>
              </div>
              <div class="admin-preview">
                <img src="@/assets/images/admin.png" alt="Admin">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>