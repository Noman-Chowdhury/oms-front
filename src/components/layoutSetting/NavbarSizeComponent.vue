<script setup>
import {currentNavbarSize, handleNavbarSize, sidebarSmallClick, sidebarHoverClick} from "@/composable/navbarSizeSetting";
import {layoutPosition} from "@/composable/navPositionSetting";

const props = defineProps(['toggleCollapse', 'setting', 'index'])

</script>

<template>
    <div v-if="layoutPosition !== 'twoColumn' && layoutPosition !== 'horizontal'" class="right-sidebar-group" id="navBarSizeGroup">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Navbar Size <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div class="settings-row" :class="{'d-none' : setting.collapsed}">
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: currentNavbarSize === 'default'}" id="sidebarDefault" @click="handleNavbarSize()">
              <div class="pb-4 px-1 pt-1 bg-menu">
                <div class="px-2 py-1 rounded-pill bg-nav mb-2"></div>
                <div class="px-2 pt-1 bg-nav mb-1"></div>
                <div class="px-2 pt-1 bg-nav mb-1"></div>
                <div class="px-2 pt-1 bg-nav mb-1"></div>
              </div>
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="px-2 py-1 bg-menu"></div>
                <div class="px-2 py-1 bg-menu"></div>
              </div>
              <span class="part-txt">Default</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: currentNavbarSize === 'small'}" id="sidebarSmall" @click="sidebarSmallClick($event)">
              <div class="pb-4 pt-1 bg-menu">
                <div class="p-1 rounded-pill bg-nav mb-2"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
              </div>
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="px-2 py-1 bg-menu"></div>
                <div class="px-2 py-1 bg-menu"></div>
              </div>
              <span class="part-txt">Small icon</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: currentNavbarSize === 'expand'}" id="sidebarHover" @click="sidebarHoverClick">
              <div class="pb-4 pt-1 bg-menu">
                <div class="p-1 rounded-pill bg-nav mb-2"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
                <div class="ps-1 pt-1 bg-nav mb-1"></div>
              </div>
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="px-2 py-1 bg-menu"></div>
                <div class="px-2 py-1 bg-menu"></div>
              </div>
              <span class="part-txt">Expand on hover</span>
            </div>
          </div>
        </div>
      </div>
</template>