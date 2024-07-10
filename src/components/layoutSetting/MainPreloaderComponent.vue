<script setup>
import {disableLoaderClickHandler, enableLoaderClickHandler, preloader} from "@/composable/disableEnablePreloaderSetting";

const props = defineProps(['toggleCollapse', 'setting', 'index'])
</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Main preloader <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div class="settings-row" :class="{'d-none' : setting.collapsed}">
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: preloader}" id="enableLoader" @click="enableLoaderClickHandler">
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
              <div class="preloader-small">
                <div class="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <span class="part-txt">Enable</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: !preloader}" id="disableLoader" @click="disableLoaderClickHandler">
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
              <span class="part-txt">Disable</span>
            </div>
          </div>
        </div>
      </div>
</template>