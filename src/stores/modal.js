import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpenModal = ref(false)
  const modalStatus = computed(() => isOpenModal.value)
  function openIt() {
    isOpenModal.value = true
  }

  function closeIt() {
    isOpenModal.value = false
  }

  return { isOpenModal, modalStatus, openIt, closeIt }
})
