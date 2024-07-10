<script setup>
import {ref} from "vue";

const props = defineProps(['toggleCollapse', 'setting', 'index'])
import {sidebarBgBtns, mainSidebarBg, noBackground, setNavBackground, clickHandler, removeBackground} from "@/composable/mainSidebarBackgroundSetting"

const backgroundImages = ref([
    new URL('/src/assets/images/nav-bg-1.jpg', import.meta.url),
    new URL('/src/assets/images/nav-bg-2.jpg', import.meta.url),
    new URL('/src/assets/images/nav-bg-3.jpg', import.meta.url),
    new URL('/src/assets/images/nav-bg-4.jpg', import.meta.url)
])
</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Sidebar Background <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div :class="{'d-none' : setting.collapsed}">
          <div class="sidebar-bg-btn-box">
            <button id="noBackground" @click="removeBackground">
              <span><i class="fa-light fa-xmark"></i></span>
            </button>
            <button v-for="image in backgroundImages" class="sidebar-bg-btn" :class="{active : image === mainSidebarBg}" :style="`background-image: url(${image})`" @click="clickHandler(image)"></button>
          </div>
        </div>
      </div>
</template>