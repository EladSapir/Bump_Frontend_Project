<template>
  <div class="homepage">
     <headerc />
    <h1>This is an the home page</h1>
  </div>
</template>
  
<script>
import headerc from "../components/header.vue";

export default {
  name: "homepage",
  components: {
    headerc
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

