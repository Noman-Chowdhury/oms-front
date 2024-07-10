<script setup>
import {onMounted, ref} from "vue";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import DefaultTableComponent from "@/components/tables/DefaultTableComponent.vue";
import StripedRowsTableComponent from "@/components/tables/StripedRowsTableComponent.vue";
import StripedColumnsTableComponent from "@/components/tables/StripedColumnsTableComponent.vue";
import ColorsTableComponent from "@/components/tables/ColorsTableComponent.vue";
import HoverableTableComponent from "@/components/tables/HoverableTableComponent.vue";
import BorderedTableComponent from "@/components/tables/BorderedTableComponent.vue";
import BorderColorTableComponent from "@/components/tables/BorderColorTableComponent.vue";
import WithoutBordersTableComponent from "@/components/tables/WithoutBordersTableComponent.vue";
import DefaultDataTableComponent from "@/components/tables/DefaultDataTableComponent.vue";
import DataTableBodyScrollComponent from "@/components/tables/DataTableBodyScrollComponent.vue";
import CustomizedDataTableComponent from "@/components/tables/CustomizedDataTableComponent.vue";

onMounted(() => {
})
</script>

<template>
<DashboardBreadcrumb>
  <template #title>Tables</template>
</DashboardBreadcrumb>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Basic Tables</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <DefaultTableComponent />
            <StripedRowsTableComponent />
            <StripedColumnsTableComponent />
            <ColorsTableComponent />
            <HoverableTableComponent />
            <BorderedTableComponent />
            <BorderColorTableComponent />
            <WithoutBordersTableComponent />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Data Tables</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <DefaultDataTableComponent />
            <DataTableBodyScrollComponent />
            <CustomizedDataTableComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>