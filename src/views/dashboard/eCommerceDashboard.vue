<script setup>
import {onMounted, ref} from "vue";

import EcommarceStatsComponent from "@/components/ecommerce-dashboard/EcommarceStatsComponent.vue";
import SalesAnalyticsChartComponent from "@/components/ecommerce-dashboard/SalesAnalyticsChartComponent.vue";
import SocialMediaVisitorComponent from "@/components/ecommerce-dashboard/SocialMediaVisitorComponent.vue";
import NewCustomersComponent from "@/components/ecommerce-dashboard/NewCustomersComponent.vue";
import RecentOrdersComponent from "@/components/ecommerce-dashboard/RecentOrdersComponent.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";

onMounted(() => {

})
</script>

<template>
  <div class="dashboard-breadcrumb mb-25">
    <h2>{{ $t('dashboard.ecommerce_dashboard') }}</h2>
    <DateRangePicker />
  </div>
  <EcommarceStatsComponent />
  <div class="row">
    <SalesAnalyticsChartComponent />
    <SocialMediaVisitorComponent />
    <NewCustomersComponent />
    <RecentOrdersComponent />
  </div>
</template>

<style scoped>
</style>