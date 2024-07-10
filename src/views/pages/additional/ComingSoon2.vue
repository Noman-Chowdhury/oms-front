<script setup>
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave} from "vue-router";

const endDate = new Date('07/27/2035 17:00:00');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date();
  const diff = endDate - now;

  if (diff < 0) {
    clearInterval(interval);
    alert('Done!');
  } else {
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
  }
};

let interval;

onMounted(() => {
  interval = setInterval(updateCountdown, 1000);
});

onBeforeRouteLeave(() => {
  clearInterval(interval);
})
</script>

<template>
  <div class="panel coming-soon-panel coming-soon-panel-2">
    <div class="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="part-img">
        <img src="@/assets/images/coming-soon-2.png" alt="coming-soon">
      </div>
      <div class="part-txt">
        <ul class="countdown">
          <li><span class="days">{{ days }}</span><p class="days_text">Days</p></li>
          <li class="seperator">:</li>
          <li><span class="hours">{{ hours }}</span><p class="hours_text">Hours</p></li>
          <li class="seperator">:</li>
          <li><span class="minutes">{{ minutes }}</span><p class="minutes_text">Minutes</p></li>
          <li class="seperator">:</li>
          <li><span class="seconds">{{ seconds }}</span><p class="seconds_text">Seconds</p></li>
        </ul>
        <router-link :to="{ name: 'dashboard_index' }" class="btn btn-primary py-2 px-5 rounded-pill">Go To Home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>