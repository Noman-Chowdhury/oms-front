<script setup>
import {ref} from "vue";

import vueApexcharts from "vue3-apexcharts";

const options = ref({
  chart: {
    id: 'vuechart-example',
    height: 354,
    type: 'area',
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    curve: 'smooth'
  },
  xaxis: {
    fill: '#FFFFFF',
    type: 'datetime',
    categories: ["2022-12-19T00:00:00.000Z", "2022-12-20T00:00:00.000Z", "2022-12-21T00:00:00.000Z", "2022-12-22T00:00:00.000Z", "2022-12-23T00:00:00.000Z", "2022-12-24T00:00:00.000Z", "2022-12-25T00:00:00.000Z"],
    labels: {
      format: 'dddd',
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    borderColor: '#334652',
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      }
    },
    padding: {
      bottom: 15
    }
  },
  responsive: [{
    breakpoint: 479,
    options: {
      chart: {
        height: 250,
      },
    },
  }]
});
const series = ref([{
  name: 'Stock',
  color: '#0D99FF',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Order',
  color: '#a9b4cc',
  data: [11, 32, 45, 32, 34, 52, 41]
}]);
</script>

<template>
  <div class="col-xxl-8">
    <div class="panel chart-panel-1">
      <div class="panel-header">
        <h5>Sales Analytics</h5>
        <div class="btn-box">
          <button class="btn btn-sm btn-outline-primary">Week</button>
          <button class="btn btn-sm btn-outline-primary">Month</button>
          <button class="btn btn-sm btn-outline-primary">Year</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="chart-dark">
          <vueApexcharts type="area" height="354" :options="options" :series="series"></vueApexcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>