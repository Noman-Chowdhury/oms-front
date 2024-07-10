<script setup>
import {currentActiveTheme, changeCurrentTheme} from "@/composable/manageThemeSetting.js"
const props = defineProps(['toggleCollapse', 'setting', 'index'])
</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Theme Color <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div class="settings-row" :class="{'d-none' : setting.collapsed}">
          <div class="settings-col">
            <div class="dashboard-icon d-flex bg-blue-theme gap-1 border rounded" :class="{active: currentActiveTheme === 'blue-theme'}" @click="changeCurrentTheme('blue-theme')">
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
              <span class="part-txt">Blue Theme</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded bg-body-secondary light-theme-btn" :class="{active:  currentActiveTheme === 'light-theme'}" @click="changeCurrentTheme('light-theme')">
              <div class="pb-4 px-1 pt-1 bg-dark-subtle">
                <div class="px-2 py-1 rounded-pill bg-primary mb-2"></div>
                <div class="px-2 pt-1 bg-primary mb-1"></div>
                <div class="px-2 pt-1 bg-primary mb-1"></div>
                <div class="px-2 pt-1 bg-primary mb-1"></div>
              </div>
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="px-2 py-1 bg-dark-subtle"></div>
                <div class="px-2 py-1 bg-dark-subtle"></div>
              </div>
              <span class="part-txt">Light Theme</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded bg-dark" :class="{active:  currentActiveTheme === 'dark-theme'}" @click="changeCurrentTheme('dark-theme')">
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
              <span class="part-txt">Dark Theme</span>
            </div>
          </div>
        </div>
      </div>
</template>