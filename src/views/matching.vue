<template>
  <navbar />
  <div class="main-container">
      <matchingsettings v-if="matchingsettings" @match="startmatch"/>
      <partnersstack :partners="partners" v-else/>
  </div>
</template>

<script>
import matchingsettings from '../components/matchingsettings.vue';
import loading from '../components/loading.vue';
import navbar from "../components/navbar.vue";
import partnersstack from "../components/partnersstack.vue";

export default {
  name: 'matching',
  data() {
    return {
      matchingsettings: true,
      partners: [],
      emptystack: false,
    }
  },
  components: {
    matchingsettings,
    loading,
    navbar,
    partnersstack,
  },
  methods: {
    startmatch(partners){
      this.partners=partners;
      if(this.partners.length==0){
        this.emptystack=true;

      }
      this.matchingsettings=false;
    
      console.log("partners from match: ",partners);
    }
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