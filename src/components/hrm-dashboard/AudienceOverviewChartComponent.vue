<script setup>
import vueApexcharts from "vue3-apexcharts";
import {ref} from "vue";
const audienceOverviewSeries = ref([{
  name: 'Stock',
  color: '#1490e3',
  data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109]
}, {
  name: 'Order',
  color: '#37c3ed',
  data: [51, 19, 55, 56, 54, 42, 54, 198, 64, 71, 21, 52]
}]);

const audienceOverviewOptions = ref({
  chart: {
    height: 410,
    type: 'area',
    stacked: true,
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0,
    curve: 'straight'
  },
  markers: {
    size: 2,
    strokeWidth: 0
  },
  xaxis: {
    fill: '#FFFFFF',
    type: 'datetime',
    categories: ["2022-12-19T00:00:00.000Z", "2022-12-20T00:00:00.000Z", "2022-12-21T00:00:00.000Z", "2022-12-22T00:00:00.000Z", "2022-12-23T00:00:00.000Z", "2022-12-24T00:00:00.000Z", "2022-12-25T00:00:00.000Z", "2022-12-26T00:00:00.000Z", "2022-12-27T00:00:00.000Z", "2022-12-28T00:00:00.000Z", "2022-12-29T00:00:00.000Z", "2022-12-30T00:00:00.000Z"],
    labels: {
      datetimeFormatter: {
        month: 'MMMM',
      }
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
    breakpoint: 1199,
    options: {
      chart: {
        height: 365,
      },
    },
  },{
    breakpoint: 991,
    options: {
      chart: {
        height: 300,
      },
    },
  },{
    breakpoint: 479,
    options: {
      chart: {
        height: 250,
      },
    },
  }]
});

</script>

<template>
  <div class="col-xxl-8">
    <div class="panel chart-panel-1">
      <div class="panel-header">
        <h5>Audience Overview</h5>
        <div class="btn-box">
          <button class="btn btn-sm btn-outline-primary">Week</button>
          <button class="btn btn-sm btn-outline-primary">Month</button>
          <button class="btn btn-sm btn-outline-primary">Year</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="chart-dark">
          <vueApexcharts type="area" height="410" :options="audienceOverviewOptions" :series="audienceOverviewSeries"></vueApexcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>