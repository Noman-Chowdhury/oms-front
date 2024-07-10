<script setup>
import {onMounted, ref} from "vue";
import AudienceOverviewChartComponent from "@/components/hrm-dashboard/AudienceOverviewChartComponent.vue";
import AttendanceTableComponent from "@/components/hrm-dashboard/AttendanceTableComponent.vue";
import UpcomingInterviewsComponent from "@/components/hrm-dashboard/UpcomingInterviewsComponent.vue";
import NoticeBoardComponent from "@/components/hrm-dashboard/NoticeBoardComponent.vue";
import RecentActivityComponent from "@/components/hrm-dashboard/RecentActivityComponent.vue";
import HrmStatsComponent from "@/components/hrm-dashboard/HrmStatsComponent.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";

onMounted(() => {
})
</script>

<template>
  <div class="dashboard-breadcrumb mb-25">
    <h2>{{ $t('dashboard.hr_dashboard') }}</h2>
    <DateRangePicker />
  </div>
  <HrmStatsComponent />
  <div class="row">
    <AudienceOverviewChartComponent />
    <RecentActivityComponent />
    <NoticeBoardComponent />
    <AttendanceTableComponent />
    <UpcomingInterviewsComponent />
  </div>
</template>

<style scoped>

</style>