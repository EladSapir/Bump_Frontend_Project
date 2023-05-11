<template>
  <div class="homepage">
    <navbar />
   <createpost :profilePicture="profilePicture" />
   <!-- <post v-for="posto in posts" :key="posto.id" :posto="posto" /> -->
  <post v-for="(apost,i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="profilePicture" />
  </div>

</template>
  
<script>

import createpost from '../components/createpost.vue';
import navbar from "../components/navbar.vue";
import post from '../components/post.vue';

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
      posts:[]
    };
  },
  created() {
    // Example of manually setting posts
    this.posts = [
      {
        id: 1,
        profilePicture:'tomer_image',
        username: 'ToTheTomer',
        time:'20:30',
        date:'20/10/2020',
        text:"🎮🔥 Let the Games Begin! Join the Ultimate Gaming Adventure! 🔥🎮🌟 Calling all gamers and virtual warriors! 🌟 Get ready to embark on an unforgettable gaming journey as we dive into the realm of excitement and entertainment. 🎉 Whether you're a casual player or a hardcore enthusiast, we've got something epic in store for you!🔥 Brace yourself for heart-pounding action, mind-bending puzzles, and breathtaking visuals that will transport you to another world. Immerse yourself in immersive narratives and become the hero of your own epic saga. 🌍 Are you ready to conquer new realms and save the day?"       
        ,photo:'post1',
        bump:10,
        share:5
      },
      {
        id: 2,
        profilePicture:'yossi_image',
        username: 'YossiTheKing',
        time:'21:30',
        date:'21/10/2020',
        text:'🕹️ Dive into the latest releases, from pulse-pounding first-person shooters to captivating role-playing adventures. 🏹 Take on the challenge of online battles and prove your skills against fellow gamers from around the globe. Engage in fierce competitions, team up with friends, and celebrate victories together!'
        ,photo:'',
        bump:10,
        share:5
      },
      // Add more posts as needed
    ];
  },

};
</script>
  
<style scoped>
html{
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
  margin-top: 80px;  /* Yossi added */
}


</style>

