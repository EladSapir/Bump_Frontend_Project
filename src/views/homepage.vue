<template>
  <header class="headerclass"/>
  <div class="homepage">
    <h1>This is an the home page</h1>
  </div>
</template>
  
<script>
import header from "../components/header.vue";

export default {
  name: "homepage",
  components: {
    header
  },
  data() {
    return {
      
    };
  },
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

.headerclass {
  position: absolute;
  height: 30px;
  z-index: 1;
}
</style>

