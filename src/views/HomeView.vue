<template>
  <div class="home">
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Login | Signup</router-link>
  </nav>
  <router-view/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
