<script setup>
import HomeView from '@/views/dashboard/eCommerceDashboard.vue'
import userDashboard from '@/views/dashboard/UserDashboard.vue'
import {useUserInfoStore} from "@/stores/userInfoStore";

const userInfoStore = useUserInfoStore()

</script>

<template>
  <user-dashboard v-if="userInfoStore.user.is_employee"/>
  <home-view v-else/>
</template>

<style scoped>

</style>