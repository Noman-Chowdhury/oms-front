<script setup>
import {
  handleNavPositionClick,
  layoutPosition
} from "@/composable/navPositionSetting";
const props = defineProps(['toggleCollapse', 'setting', 'index'])

</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Nav Position <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div class="settings-row" :class="{'d-none' : setting.collapsed}">
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: (layoutPosition === 'vertical')}" @click="handleNavPositionClick('vertical')">
              <div class="pb-2 px-1 pt-1 bg-menu">
                <div class="px-2 py-1 rounded-pill bg-nav mb-2"></div>
                <div class="border border-primary mb-1">
                  <div class="px-2 pt-1 bg-nav mb-1"></div>
                  <div class="px-2 pt-1 bg-nav mb-1"></div>
                </div>
                <div class="border border-primary">
                  <div class="px-2 pt-1 bg-nav mb-1"></div>
                  <div class="px-2 pt-1 bg-nav mb-1"></div>
                </div>
              </div>
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="px-2 py-1 bg-menu"></div>
                <div class="px-2 py-1 bg-menu"></div>
              </div>
              <span class="part-txt">Vertical</span>
            </div>
          </div>
          <div class="settings-col d-lg-block d-none">
            <div class="dashboard-icon d-flex h-100 gap-1 border rounded" :class="{active: layoutPosition === 'horizontal'}" @click="handleNavPositionClick('horizontal')">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div>
                  <div class="p-1 bg-menu border-bottom">
                    <div class="rounded-circle p-1 bg-nav w-max-content"></div>
                  </div>
                  <div class="p-1 bg-menu d-flex gap-1 mb-1">
                    <div class="w-max-content px-2 pt-1 rounded bg-nav"></div>
                    <div class="w-max-content px-2 pt-1 rounded bg-nav"></div>
                    <div class="w-max-content px-2 pt-1 rounded bg-nav"></div>
                    <div class="w-max-content px-2 pt-1 rounded bg-nav"></div>
                  </div>
                </div>
                <div class="px-2 py-1 bg-menu"></div>
              </div>
              <span class="part-txt">Horizontal</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: layoutPosition === 'twoColumn'}" @click="handleNavPositionClick('twoColumn')">
              <div class="p-1 bg-menu"></div>
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
              <span class="part-txt">Two column</span>
            </div>
          </div>
          <div class="settings-col">
            <div class="dashboard-icon d-flex gap-1 border rounded" :class="{active: layoutPosition === 'flushMenu'}" @click="handleNavPositionClick('flushMenu')">
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
              <span class="part-txt">Flush</span>
            </div>
          </div>
        </div>
      </div>
</template>