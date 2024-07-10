import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const isCollapsed = ref(false)

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function handleCollapsed() {
    isCollapsed.value = !isCollapsed.value
  }

  return { count, doubleCount, increment, handleCollapsed, isCollapsed }
})
