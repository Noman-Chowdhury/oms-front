<script setup>

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
</script>

<template>
<DashboardBreadcrumb>
  <template #title>Maps</template>
</DashboardBreadcrumb>
  <div class="row">
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Markers</h5>
        </div>
        <div class="panel-body">
          <div class="map-panel">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.7615044340911!2d-73.88888642405087!3d40.65091599771318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ce282475d1f%3A0x74b7b2db4e17a2c6!2s12020%20Flatlands%20Ave%2C%20Brooklyn%2C%20NY%2011207%2C%20USA!5e0!3m2!1sen!2sbd!4v1676093112676!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>View Mode</h5>
        </div>
        <div class="panel-body">
          <div class="map-panel">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.8201794227016!2d-73.88888642405087!3d40.65091599771318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ce282475d1f%3A0x74b7b2db4e17a2c6!2s12020%20Flatlands%20Ave%2C%20Brooklyn%2C%20NY%2011207%2C%20USA!5e1!3m2!1sen!2sbd!4v1676093037501!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Streetview Mode</h5>
        </div>
        <div class="panel-body">
          <div class="map-panel">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1676093302662!6m8!1m7!1sZw08bo1C3y_6u9SiyPYCtg!2m2!1d40.65115662992476!2d-73.88982243199902!3f111.73829740430125!4f-1.9181839606251714!5f0.7820865974627469" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Search Mode</h5>
        </div>
        <div class="panel-body">
          <div class="map-panel">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7297.4524089696615!2d90.39686142422984!3d23.863854306327493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurant!5e0!3m2!1sen!2sus!4v1676093590023!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>