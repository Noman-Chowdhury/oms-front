<script setup>
import { ref } from 'vue';
const props = defineProps(['isActive', 'profileToggleDropdown', 'closeProfileSidebar'])
const seeDropdown = ref(false)

</script>

<template>
  <div class="profile-right-sidebar" :class="{'active': isActive}">
    <button class="right-bar-close" @click="closeProfileSidebar"><i class="fa-light fa-angle-right"></i></button>
    <div class="top-panel">
      <div class="profile-content scrollable">
        <ul>
          <li>
            <div class="dropdown-txt text-center">
              <p class="mb-0">Shaikh Abu Dardah</p>
              <span class="d-block">Web Developer</span>
              <div class="d-flex justify-content-center">
                <div class="form-check pt-3">
                  <input class="form-check-input" type="checkbox" v-model="seeDropdown" id="seeProfileAsDropdown" @change="profileToggleDropdown">
                  <label class="form-check-label" for="seeProfileAsDropdown">See as dropdown</label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <router-link to="/view-profile" class="dropdown-item"><span class="dropdown-icon"><i class="fa-regular fa-circle-user"></i></span> Profile</router-link>
          </li>
          <li>
            <router-link to="/chat" class="dropdown-item"><span class="dropdown-icon"><i class="fa-regular fa-message-lines"></i></span> Message</router-link>
          </li>
          <li>
            <router-link to="/task" class="dropdown-item"><span class="dropdown-icon"><i class="fa-regular fa-calendar-check"></i></span> Taskboard</router-link>
          </li>
          <li>
            <a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-circle-question"></i></span> Help</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-panel">
      <div class="button-group">
        <router-link to="/edit-profile"><i class="fa-light fa-gear"></i><span>Settings</span></router-link>
        <router-link to="/login"><i class="fa-light fa-power-off"></i><span>Logout</span></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>