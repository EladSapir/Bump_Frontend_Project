<template>
  <div class="homepage">
    <navbar />
    <createpost :profilePicture="profilePicture" @createpost="getPosts" />
    <!-- <post v-for="posto in posts" :key="posto.id" :posto="posto" /> -->
    <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="profilePicture" />
  </div>
</template>
  
<script>

import createpost from '../components/createpost.vue';
import navbar from "../components/navbar.vue";
import post from '../components/post.vue';
import axios from 'axios';

export default {
  name: "homepage",
  components: {
    navbar,
    createpost,
    post
  },
  data() {
    return {
      profilePicture: "yossi_image",
      posts: [],
      userId: ''
    };
  },
  methods:{
    async getPosts() { // need to implement 
      try {
        this.isloading = true;
        var addr = 'https://backend-project-vzn7.onrender.com/homepage/' + this.userId;
        console.log('homepage:' + addr);
        const response = await axios.get(addr, {

        });
        
        // Extract the user ID from the response
        const res = response.data;
        console.log("homepage:" + res);
        if (res) {
          this.posts = res;
        }
      } catch (error) {
        console.error(error);
        // Handle the error (e.g., show an error message)
      }
      this.isloading = false;
    },
  },
  created() {
    this.userId = this.$route.query.id;
    console.log('homepage:' + this.userId);
    this.getPosts()
    // Example of manually setting posts
    
    
  },

};
</script>
  
<style scoped>
html {
  background-image: none !important;

}

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--pagebgcolor);
  height: 100%;
  width: 100vw;
  margin-top: 80px;
  padding-bottom: 30px;
}
</style>

