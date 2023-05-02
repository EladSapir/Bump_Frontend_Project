<template>
  <div class="box" >
    <div class="home" >
      <div>
        <img id="logo" src="@/assets/Logo.png" alt="logo">
        <p id="find">Find your next</p>
        <p id="gaming">Gaming Partner</p>
        <router-link class="link" to="/login_signup"><button class="btn" id="let">Let's Bump </button></router-link>
      </div>
      <div class="Features">
        <div class="fet">
          <img src="../assets/icon_user_.svg" style="width: 100px;">
          <h2>Create a Gaming Profile</h2>
          <p>Find and connect with like-minded gamers based on your favorite games, skill level, and other criteria.
            Expand your
            gaming circle and discover new players to play with.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_peoples_two_.svg" style="width: 120px;">
          <h2>Find Partners to Play With</h2>
          <p>Create a gaming profile and showcase your skills, experience, and favorite games to the community.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_muscle_.svg" style="width: 110px;">
          <h2>Collaborate and Improve </h2>
          <p>Collaborate with other gamers, learn from their experiences, and improve your own skills. Play together,
            share tips
            and tricks, and enhance your gaming experience.</p>
        </div>
      </div>
    </div>

  </div>
  <div class="land">
    <landingfooter @open="toggleAbout"/>
  </div>

  <div v-if="showAbout">
      <about @close="toggleAbout"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import landingfooter from '@/components/landingfooter.vue'
import about from '@/components/about.vue'

export default {
  name: 'homeView',
  components: {
    landingfooter,
    about
  },
  data() {
    return {
      showAbout: false
    }
  },
    methods:{
        toggleAbout() {
            this.showAbout = !this.showAbout
            console.log('showAbout = ',this.showAbout)
        }
    }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.home {
  box-sizing: border-box;
  padding: 150px;
  background: #2c394bd7;
  border: 1px solid #323244;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  width: 80%;

}

.Features {
  box-sizing: border-box;
  width: 100%;
  padding: 0 50px;
  padding-top: 100px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 150px;
  text-align: center;

}

.fet {
  color: #FFFFFF;
  font-size: 35px;
}

h2 {
  text-transform: uppercase;
  font-size: 45px;
}

#logo {
  border-radius: 50%;
  width: 10%;
}

#find {
  font-size: 190px;
  color: #FFFFFF;
  margin: 0;
}

#gaming {
  font-weight: 600;
  font-size: 200px;
  color: #2c394bd7;
  letter-spacing: 0.03em;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #E64425;
  margin: 0;
  padding-bottom: 50px;
}

#let {
  padding: 25px 150px;
}

.land {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>
