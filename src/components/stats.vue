<template>
  <div class="container">
    <div class="displaybanner">
      <h1 class="bannerh1">Activity Time<h2 class="bannerh2">Time on web</h2>
      </h1>
      <div class="paceandp">
        <div class="pacecontainer"><img class="pacesvg" src="../assets/avg_pace.svg"></div>
        <p>Until last update - {{ hours }} hours and {{ minutes }} min in web</p>
      </div>
    </div>
    <div class="card">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
  name: 'Stats',
  data() {
    return {
      hours: 0,
      minutes: 0,
      statsData: {}  // Data received from the server response
    };
  },
  methods: {
    async requestfromserver(addr) {
      try {
        const response = await axios.get(addr);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    initializeChart() {
      const chartCanvas = this.$refs.chartCanvas;
      const ctx = chartCanvas.getContext('2d');
      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Matches', 'Comments', 'Bumps', 'Posts'],
          datasets: [
            {
              label: 'Stats',
              data: [
                this.statsData.matches,
                this.statsData.comments,
                this.statsData.bumps,
                this.statsData.posts
              ],
              backgroundColor: '#E54425'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                color: '#FFFFFF',
                font: {
                  size: 14,
                }
              }
            }
          },
          elements: {
            bar: {

              borderColor: '#232633',
              backgroundColor: '#E54425'
            }
          }
        }
      });
    }
  },
  async created() {
    this.userId = this.$route.query.id;
    var addr = 'https://backend-project-vzn7.onrender.com/profile/stats/' + this.userId;
    const res = await this.requestfromserver(addr);
    this.statsData = res;
    this.hours = Math.floor(this.statsData.onlinetime / 3600);
    this.minutes = Math.floor((this.statsData.onlinetime % 3600) / 60);
    this.initializeChart();
  }
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
}

.card {
  background-color: var(--background);
  border-radius: 15px;
  border: 1px solid var(--stroke);
  padding: 20px;
  width: 600px;
}

.bannerh1 {
  color: var(--white);
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
}

.bannerh2 {
  color: var(--white);
  font-size: 17px;
  font-weight: 500;
  line-height: 30px;
  position: inherit;
}

.displaybanner {
  top: 0;
  height: 120px;
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 15px;
  border: 1px solid var(--stroke);
  margin-right: 20px;
  padding: 15px;
}

.pacecontainer {
  display: flex;
  width: calc(30px + 22px + 30px);
  justify-content: center;
  padding: 13px;
  border: 1px solid var(--stroke);
  border-radius: 15px;
}

.paceandp {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-top: 10px
}

.pacesvg {
  height: 22px;
  width: 22px;
}

p {
  color: var(--white);
  font-size: 14px;
}
</style>
  