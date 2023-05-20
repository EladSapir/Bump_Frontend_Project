<template>
    <div class="displaybanner">

    </div>
    <div class="card">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from "vue";
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'Stats',
    props: {
      statsData: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const chartData = ref(null);
      const chartOptions = ref({
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      });
      let chartInstance = null;
  
      onMounted(() => {
        const chartCanvas = document.querySelector('canvas');
        const ctx = chartCanvas.getContext('2d');
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: chartData.value,
          options: chartOptions.value
        });
      });
  
      watch(() => props.statsData, () => {
        chartData.value = {
          labels: ['Matches', 'Comments', 'Bumps', 'Posts'],
          datasets: [
            {
              label: 'Stats',
              data: [props.statsData.matches, props.statsData.comments, props.statsData.bumps, props.statsData.posts],
              backgroundColor: '#E54425'
            }
          ]
        };
        if (chartInstance) {
          chartInstance.data = chartData.value;
          chartInstance.update();
        }
      }, { immediate: true });
  
      return {
        chartData,
        chartOptions
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: var(--background);
    border-radius: 15px;
    border: 1px solid var(--stroke);
    padding: 20px;
    width: 600px;
  }
  .displaybanner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    background-color: var(--background);
    border-radius: 15px;
    border: 1px solid var(--stroke);
    padding: 20px;
    width: 600px;
    margin-bottom: 20px;
  }
  </style>
  