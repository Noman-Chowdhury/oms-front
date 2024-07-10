<script setup>
import {selectedStyleSheet, setStyleSheet} from "@/composable/primaryColorChangeSetting"
const props = defineProps(['toggleCollapse', 'setting', 'index'])
</script>

<template>
    <div class="right-sidebar-group">
        <span class="sidebar-subtitle" @click="toggleCollapse(index)">Primary Color <span><i class="fa-light " :class="[setting.collapsed ? 'fa-angle-down' : 'fa-angle-up']"></i></span></span>
        <div class="settings-row-2" :class="{'d-none' : setting.collapsed}">
          <button class="color-palette color-palette-1" :class="{active: (selectedStyleSheet === 'blue-color' || selectedStyleSheet === null)}" @click="setStyleSheet('blue-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-2" :class="{active: selectedStyleSheet === 'orange-color'}" @click="setStyleSheet('orange-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-3" :class="{active: selectedStyleSheet === 'pink-color'}" @click="setStyleSheet('pink-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-4" :class="{active: selectedStyleSheet === 'eagle_green-color'}" @click="setStyleSheet('eagle_green-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-5" :class="{active: selectedStyleSheet === 'purple-color'}" @click="setStyleSheet('purple-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-6" :class="{active: selectedStyleSheet === 'gold-color'}" @click="setStyleSheet('gold-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-7" :class="{active: selectedStyleSheet === 'green-color'}" @click="setStyleSheet('green-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-8" :class="{active: selectedStyleSheet === 'deep_pink-color'}" @click="setStyleSheet('deep_pink-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-9" :class="{active: selectedStyleSheet === 'tea_green-color'}" @click="setStyleSheet('tea_green-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="color-palette color-palette-10" :class="{active: selectedStyleSheet === 'yellow_green-color'}" @click="setStyleSheet('yellow_green-color')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
</template>