<script setup>
import vueApexcharts from "vue3-apexcharts/src";
import {
  useLineChartData,
  useAreaChartData,
  useColumnChartData,
  useBarChartData,
  useMixedChartData,
  useTimelineChartData,
  useCandlestickChartData,
  useBoxplotChartData,
  useBubbleChartData,
  useScatterChartData,
  useHeatmapChartData,
  useTreemapChartData,
  usePieChartData,
  useRadialBarChartData,
  useRadarChartData, usePolarAreaChartData
} from "@/composable/chartsDataManage";

const {lineChartSeries, lineChartOptions} = useLineChartData();
const {areaChartSeries, areaChartOptions} = useAreaChartData();
const {columnChartSeries, columnChartOptions} = useColumnChartData();
const {barChartSeries, barChartOptions} = useBarChartData();
const {mixedChartSeries, mixedChartOptions} = useMixedChartData();
const {timelineChartSeries, timelineChartOptions} = useTimelineChartData();
const {candlestickChartSeries, candlestickChartOptions} = useCandlestickChartData();
const {boxplotChartSeries, boxplotChartOptions} = useBoxplotChartData();
const {bubbleChartSeries, bubbleChartOptions} = useBubbleChartData();
const {scatterChartSeries, scatterChartOptions} = useScatterChartData();
const {heatmapChartSeries, heatmapChartOptions} = useHeatmapChartData();
const {treemapChartSeries, treemapChartOptions} = useTreemapChartData();
const {pieChartSeries, pieChartOptions} = usePieChartData();
const {radialBarChartSeries, radialBarChartOptions} = useRadialBarChartData();
const {radarChartSeries, radarChartOptions} = useRadarChartData();
const {polarAreaChartSeries, polarAreaChartOptions} = usePolarAreaChartData();

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import BoxplotCharts from "@/components/charts/BoxplotCharts.vue";
import CandlestickCharts from "@/components/charts/CandlestickCharts.vue";
import TimelineCharts from "@/components/charts/TimelineCharts.vue";
import MixedCharts from "@/components/charts/MixedCharts.vue";
import BarCharts from "@/components/charts/BarCharts.vue";
import ColumnCharts from "@/components/charts/ColumnCharts.vue";
import AreaCharts from "@/components/charts/AreaCharts.vue";
import LineCharts from "@/components/charts/LineCharts.vue";
import BubbleCharts from "@/components/charts/BubbleCharts.vue";
import ScatterCharts from "@/components/charts/ScatterCharts.vue";
import HeatmapCharts from "@/components/charts/HeatmapCharts.vue";
import TreemapCharts from "@/components/charts/TreemapCharts.vue";
import PieCharts from "@/components/charts/PieCharts.vue";
import RadialBarCharts from "@/components/charts/RadialBarCharts.vue";
import RadarCharts from "@/components/charts/RadarCharts.vue";
import PolarAreaCharts from "@/components/charts/PolarAreaCharts.vue";

</script>

<template>
<DashboardBreadcrumb>
  <template #title>Charts</template>
</DashboardBreadcrumb>
  <div class="row">
    <LineCharts>
      <vueApexcharts type="line" height="354" :options="lineChartOptions" :series="lineChartSeries"></vueApexcharts>
    </LineCharts>
    <AreaCharts>
      <vueApexcharts type="area" height="354" :options="areaChartOptions" :series="areaChartSeries"></vueApexcharts>
    </AreaCharts>
    <ColumnCharts>
      <vueApexcharts type="bar" height="354" :options="columnChartOptions" :series="columnChartSeries"></vueApexcharts>
    </ColumnCharts>
    <BarCharts>
      <vueApexcharts type="bar" height="354" :options="barChartOptions" :series="barChartSeries"></vueApexcharts>
    </BarCharts>
    <MixedCharts>
      <vueApexcharts type="line" height="354" :options="mixedChartOptions" :series="mixedChartSeries"></vueApexcharts>
    </MixedCharts>
    <TimelineCharts>
      <vueApexcharts type="rangeBar" height="354" :options="timelineChartOptions" :series="timelineChartSeries"></vueApexcharts>
    </TimelineCharts>
    <CandlestickCharts>
      <vueApexcharts type="candlestick" height="354" :options="candlestickChartOptions" :series="candlestickChartSeries"></vueApexcharts>
    </CandlestickCharts>
    <BoxplotCharts>
      <vueApexcharts type="boxPlot" height="354" :options="boxplotChartOptions" :series="boxplotChartSeries"></vueApexcharts>
    </BoxplotCharts>
    <BubbleCharts>
      <vueApexcharts type="bubble" height="354" :options="bubbleChartOptions" :series="bubbleChartSeries"></vueApexcharts>
    </BubbleCharts>
    <ScatterCharts>
      <vueApexcharts type="scatter" height="354" :options="scatterChartOptions" :series="scatterChartSeries"></vueApexcharts>
    </ScatterCharts>
    <HeatmapCharts>
      <vueApexcharts type="heatmap" height="354" :options="heatmapChartOptions" :series="heatmapChartSeries"></vueApexcharts>
    </HeatmapCharts>
    <TreemapCharts>
      <vueApexcharts type="treemap" height="354" :options="treemapChartOptions" :series="treemapChartSeries"></vueApexcharts>
    </TreemapCharts>
    <PieCharts>
      <vueApexcharts type="pie" height="354" :options="pieChartOptions" :series="pieChartSeries"></vueApexcharts>
    </PieCharts>
    <RadialBarCharts>
      <vueApexcharts type="radialBar" height="354" :options="radialBarChartOptions" :series="radialBarChartSeries"></vueApexcharts>
    </RadialBarCharts>
    <RadarCharts>
      <vueApexcharts type="radar" height="354" :options="radarChartOptions"
                     :series="radarChartSeries"></vueApexcharts>
    </RadarCharts>
    <PolarAreaCharts>
      <vueApexcharts type="polarArea" height="354" :options="polarAreaChartOptions" :series="polarAreaChartSeries"></vueApexcharts>
    </PolarAreaCharts>
  </div>
</template>

<style scoped>

</style>