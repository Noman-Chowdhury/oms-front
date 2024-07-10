<script setup>
const props = defineProps(['closeModal', 'isSlot']);
</script>
<template>
  <Teleport to="body">
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal fade show"
           tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog"
           style="display:block">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div v-if="!isSlot" class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <slot name="title"/>
              </h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <slot name="body" />
            </div>

            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
          <div v-if="isSlot" class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}
/*
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}*/
</style>