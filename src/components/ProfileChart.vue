<template>
  <div class="charts-wrapper">
    <div class="profile-chart" v-for="item in statistics" :key="item.color">
      <span class="chart-total" :style="{color: item.color}"><span class="value">{{getTotal(item.data)}}</span> items</span>
      <VueApexCharts width="100%" height="90%" type="area" :options="getChartOption(years, item.color)" :series="getSeries(item.data)"/>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: "ProfileChart",
  components: {
    VueApexCharts
  },
  props: ['statistics'],
  data() {
    return {
      years: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    }
  },

  methods: {
    getChartOption(categories, color) {
      return {
        colors: [color],
        chart: {
          zoom: {
            enabled: false
          },
          width: '100%',
          height: '80%',
          sparkline: {
            enabled: false,
          },
          toolbar: {
            show: false
          },
        },
        xaxis: {
          categories,
          floating: true,
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          floating: true,
          labels: {
            show: false
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: -5,
            left: 0
          },
        },
        markers: {
          size: 0
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
            formatter: undefined,
          },
          y: {
            show: true,
            formatter: (value) => value,
            title: {
              formatter: () => 'item: ',
            },
          },
        }
      }
    },

    getSeries(data) {
      return [{
        data
      }]
    },

    getTotal(data) {
      return data.reduceRight((acc, cur) => acc + cur, 0);
    }
  }
}
</script>

<style>
.charts-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.profile-chart {
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  background-color: var(--white);
  overflow: hidden;
  position: relative;
}

.chart-total {
  position: absolute;
  top: 10px;
  left: 20px;
  line-height: 50px;
  font-size: 12px;
}

.value {
  font-weight: bold;
  font-size: 26px;
}

.vue-apexcharts {
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-height: 80%;
}
</style>
