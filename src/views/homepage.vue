<template>
  <div class="homepage">
     <navbar />
    <h1>This is an the home page</h1>
  </div>
</template>
  
<script>
import navbar from "../components/navbar.vue";

export default {
  name: "homepage",
  components: {
    navbar
  }

};
</script>
  
<style scoped>
.homepage {
  position: absolute;
  background-image: none;
  background-color: var(--pagebgcolor);
  height: 100vh;
  width: 100vw;
}

</style>

