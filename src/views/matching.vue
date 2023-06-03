<template>
  <navbar />
  <div class="main-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="matching-container">
            <matchingcontainer :userId="userId" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Foooter />
</template>

<script>
import matchingcontainer from '../components/matchingcontainer.vue';
import axios from 'axios';
import loading from '../components/loading.vue';
import navbar from "../components/navbar.vue";
import Foooter from "../components/footer.vue";

export default {
  components: {
    matchingcontainer,
    loading,
    navbar,
    Foooter
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


</style>