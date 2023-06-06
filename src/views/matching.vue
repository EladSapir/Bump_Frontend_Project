<template>
  <navbar />
  <div class="main-container">
      <matchingsettings />
  </div>
</template>

<script>
import matchingsettings from '../components/matchingsettings.vue';
import axios from 'axios';
import loading from '../components/loading.vue';
import navbar from "../components/navbar.vue";

export default {
  components: {
    matchingsettings,
    loading,
    navbar,
  },
  methods: {
    // Other methods
  },
  created() {
    this.userId = this.$route.query.id;
  },
}
</script>

<style scoped>

.main-container{
  background-color: var(--pagebgcolor);
  height: calc(100vh - 50px);
  width: 100vw;
}

</style>