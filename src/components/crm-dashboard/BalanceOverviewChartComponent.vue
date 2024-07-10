<script setup>
import {ref} from "vue";
import vueApexcharts from "vue3-apexcharts/src";
const balanceOverviewSeries = ref([{
  name: 'Stock',
  color: '#0D99FF',
  data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109]
}, {
  name: 'Order',
  color: '#a9b4cc',
  data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52]
}]);

const balanceOverviewOptions = ref({
  chart: {
    height: 396,
    type: 'bar',
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
    curve: 'smooth'
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
  <div class="col-lg-8">
    <div class="panel chart-panel-1">
      <div class="panel-header">
        <h5>Balance Overview</h5>
        <div class="btn-box">
          <button class="btn btn-sm btn-outline-primary">Week</button>
          <button class="btn btn-sm btn-outline-primary">Month</button>
          <button class="btn btn-sm btn-outline-primary">Year</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="chart-dark">
          <vueApexcharts type="bar" height="410" :options="balanceOverviewOptions" :series="balanceOverviewSeries"></vueApexcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>