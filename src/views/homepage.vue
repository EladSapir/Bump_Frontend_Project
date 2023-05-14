<template>
  <div class="homepage">
    <navbar />
    <createpost v-if="profilePicture" :profilePicture="profilePicture" @createpost="getPosts" />
    <!-- <post v-for="posto in posts" :key="posto.id" :posto="posto" /> -->
    <post v-if="!isloading" v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :gamertag="gamertag" :profilePicture="profilePicture" />
    <div class="loadingclass" v-else>
    <loading  />
  </div>
  </div>
</template>
  
<script>

import createpost from '../components/createpost.vue';
import navbar from "../components/navbar.vue";
import post from '../components/post.vue';
import axios from 'axios';
import loading from '../components/loading.vue';
export default {
  name: "homepage",
  components: {
    navbar,
    createpost,
    post,
    loading
  },
  data() {
    return {
      profilePicture: null,
      posts: [],
      userId: '',
      isloading: false,
      gamertag: '',

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
        console.log("posts:" + res.posts);
        console.log("picture:" + res.picture);
        console.log("gamertag:" + res.gamertag);

        if (res) {
          this.posts = res.posts;
          this.profilePicture = res.picture;
          this.gamertag = res.gamertag;
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
    
    
  },

};
</script>
  
<style scoped>
html {
  background-image: none !important;

}

.loadingclass{
  width: calc(100vw - 52.4vw);

}
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--pagebgcolor);
  height: 100vh;
  width: 100vw;
  margin-top: 80px;
  padding-bottom: 30px;
}
</style>

