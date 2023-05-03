<template>
  <div class="box">
    <div class="home">
      <div>
        <img id="logo" src="../assets/logo.png" alt="logo">
        <p id="find">Find your next</p>
        <p id="gaming">Gaming Partner</p>
        <router-link class="link" to="/login_signup"><button class="btn" id="let">Let's Bump </button></router-link>
      </div>
      <div class="Features">
        <div class="fet">
          <img src="../assets/icon_user_.svg" style="width: 30px;">
          <h2>Create a Gaming Profile</h2>
          <p>Find and connect with like-minded gamers based on your favorite games, skill level, and other criteria.
            Expand your
            gaming circle and discover new players to play with.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_peoples_two_.svg" style="width: 40px;">
          <h2>Find Partners to Play With</h2>
          <p>Create a gaming profile and showcase your skills, experience, and favorite games to the community.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_muscle_.svg" style="width: 35px;">
          <h2>Collaborate and Improve </h2>
          <p>Collaborate with other gamers, learn from their experiences, and improve your own skills. Play together,
            share tips
            and tricks, and enhance your gaming experience.</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showAbout">
    <about @closeA="toggleAbout" />
  </div>
  <div v-if="showTerms">
    <terms @closeT="toggleTerms" />
  </div>
  <div class="land">
    <landingfooter @openA="toggleAbout" @openT="toggleTerms" />
  </div>
</template>

<script>
// @ is an alias to /src
import landingfooter from '../components/landingfooter.vue'
import about from '../components/about.vue'
import terms from '../components/terms.vue'

export default {
  name: 'homeView',
  components: {
    landingfooter,
    about,
    terms
  },
  data() {
    return {
      showAbout: false,
      showTerms: false
    }
  },
  methods: {
    toggleAbout() {
      this.showAbout = !this.showAbout
      this.showTerms = false;

    },
    toggleTerms() {
      this.showTerms = !this.showTerms
      this.showAbout = false;
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
  padding: 20px;
  background: #2c394bd7;
  border: 1px solid #323244;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  width: 90%;
}

.Features {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  padding-top: 50px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 50px;
  text-align: center;

}

.fet {
  color: #FFFFFF;
  font-size: 14px;
}

h2 {
  text-transform: uppercase;
  font-size: 16px;
}

#logo {
  border-radius: 50%;
  width: 8%;
}

#find {
  font-size: 55px;
  color: #FFFFFF;
  margin: 0;
}

#gaming {
  font-weight: 550;
  font-size: 65px;
  color: #2c394bd7;
  letter-spacing: 0.03em;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #E64425;
  margin: 0;
  padding-bottom: 20px;
}

#let {
  padding: 10px 80px;
}

.land {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
