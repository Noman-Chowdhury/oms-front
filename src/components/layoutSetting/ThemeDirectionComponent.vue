<script setup>
const props = defineProps(['toggleCollapse', 'setting', 'index'])
import {layoutDirection, setRtl, setLtr} from "@/composable/themeDirectionSetting"
</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Theme Direction <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div :class="{'d-none' : setting.collapsed}">
          <div class="btn-group d-flex">
            <button class="btn btn-primary w-50" :class="{'active': layoutDirection === 'ltr'}" id="dirLtr" @click="setLtr">LTR</button>
            <button class="btn btn-primary w-50" :class="{'active': layoutDirection === 'rtr'}" id="dirRtl" @click="setRtl">RTL</button>
          </div>
        </div>
      </div>
</template>