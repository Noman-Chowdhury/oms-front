<script setup>
import {ref} from "vue";

const props = defineProps(['toggleCollapse', 'setting', 'index'])
import {mainContentBg, clickHandler, removeBackground} from "@/composable/mainContentBackgroundSetting";

const backgroundImages = ref([
  new URL('/src/assets/images/main-bg-1.jpg', import.meta.url),
  new URL('/src/assets/images/main-bg-2.jpg', import.meta.url),
  new URL('/src/assets/images/main-bg-3.jpg', import.meta.url),
  new URL('/src/assets/images/main-bg-4.jpg', import.meta.url)
])
</script>

<template>
    <div class="right-sidebar-group">
      <span class="sidebar-subtitle" @click="toggleCollapse(index)">Main Background <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div :class="{'d-none' : setting.collapsed}">
          <div class="main-content-bg-btn-box">
            <button id="noBackground2" @click="removeBackground">
              <span><i class="fa-light fa-xmark"></i></span>
            </button>
            <button v-for="image in backgroundImages" class="main-content-bg-btn" :class="{active : image === mainContentBg}" :style="`background-image: url(${image})`" @click="clickHandler(image)"></button>
          </div>
        </div>
      </div>
</template>