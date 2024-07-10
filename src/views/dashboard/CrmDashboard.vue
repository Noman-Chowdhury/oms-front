<script setup>
import {onMounted, ref} from "vue";
import CrmStatsComponent from "@/components/crm-dashboard/CrmStatsComponent.vue";
import BalanceOverviewChartComponent from "@/components/crm-dashboard/BalanceOverviewChartComponent.vue";
import RecentProjectsComponent from "@/components/crm-dashboard/RecentProjectsComponent.vue";
import UpcomingActivitiesComponent from "@/components/crm-dashboard/UpcomingActivitiesComponent.vue";
import PendingWorksComponent from "@/components/crm-dashboard/PendingWorksComponent.vue";
import InvoicesComponent from "@/components/crm-dashboard/InvoicesComponent.vue";
import MyTasksComponent from "@/components/crm-dashboard/MyTasksComponent.vue";
import CrmNoticeBoardComponent from "@/components/crm-dashboard/CrmNoticeBoardComponent.vue";
import WorksDeadlinesComponent from "@/components/crm-dashboard/WorksDeadlinesComponent.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";

onMounted(() => {
})
</script>

<template>
  <div class="dashboard-breadcrumb mb-25">
    <h2>{{ $t('dashboard.crm_dashboard') }}</h2>
    <DateRangePicker />
  </div>
  <CrmStatsComponent />
  <div class="row">
    <BalanceOverviewChartComponent />
    <RecentProjectsComponent />
    <UpcomingActivitiesComponent />
    <PendingWorksComponent />
    <InvoicesComponent />
    <MyTasksComponent />
    <CrmNoticeBoardComponent />
    <WorksDeadlinesComponent />
  </div>
</template>

<style scoped>

</style>