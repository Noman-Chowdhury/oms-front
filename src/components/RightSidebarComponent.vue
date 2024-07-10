<script setup>
const props = defineProps(['isSidebarActive', 'closeSidebar'])
import {ref} from "vue"
import {vClickOutside} from "@/composable/outsideClicker";

import NavPositionComponent from "@/components/layoutSetting/NavPositionComponent.vue";
import ThemeDirectionComponent from "@/components/layoutSetting/ThemeDirectionComponent.vue";
import PrimaryColorComponent from "@/components/layoutSetting/PrimaryColorComponent.vue";
import ThemeColorComponent from "@/components/layoutSetting/ThemeColorComponent.vue";
import NavbarSizeComponent from "@/components/layoutSetting/NavbarSizeComponent.vue";
import SidebarBackgroundComponent from "@/components/layoutSetting/SidebarBackgroundComponent.vue";
import MainBackgroundComponent from "@/components/layoutSetting/MainBackgroundComponent.vue";
import MainPreloaderComponent from "@/components/layoutSetting/MainPreloaderComponent.vue";

const layoutSettings = ref([
  {key: 'nav_position', component: NavPositionComponent, title: 'Nav Position', collapsed: false},
  {key: 'theme_direction', component: ThemeDirectionComponent, title: 'Theme Direction', collapsed: false},
  {key: 'primary_color', component: PrimaryColorComponent, title: 'Primary Color', collapsed: false},
  {key: 'theme_color', component: ThemeColorComponent, title: 'Theme Color', collapsed: false},
  {key: 'navbar_size', component: NavbarSizeComponent, title: 'Navbar Size', collapsed: false},
  {key: 'sidebar_background', component: SidebarBackgroundComponent, title: 'Sidebar Background', collapsed: false},
  {key: 'main_background', component: MainBackgroundComponent, title: 'Main Background', collapsed: false},
  {key: 'main_preloader', component: MainPreloaderComponent, title: 'Main Preloader', collapsed: false},
])

const collapsed = ref(false)

const handleClickOutside = (() => {
  props.closeSidebar();
})

const toggleCollapse = ((index) => {
  layoutSettings.value[index].collapsed = !layoutSettings.value[index].collapsed;
})

</script>

<template>
  <div v-click-outside="handleClickOutside" class="right-sidebar" :class="{ active: isSidebarActive }" @click.stop>
    <button class="right-bar-close" @click="closeSidebar"><i class="fa-light fa-angle-right"></i></button>
    <div class="sidebar-title">
      <h3>Layout Settings</h3>
    </div>
    <div class="sidebar-body scrollable">
      <template v-for="(setting, index) in layoutSettings">
        <component :is="setting.component" :setting="setting" :index="index" :toggleCollapse="toggleCollapse"></component>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>