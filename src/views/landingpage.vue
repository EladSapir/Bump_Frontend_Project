<template>
  <div class="box">
    <div class="home">
      <div>
        <img id="logo" src="../../public/Logo1.svg" alt="logo">
        <p id="find">Find your next</p>
        <p id="gaming">Gaming Partner</p>
        <router-link class="link" to="/login_signup"><button class="btn" id="let">Let's Bump </button></router-link>
      </div>
      <div class="Features">
        <div class="fet">
          <img src="../assets/icon_user_.svg" >
          <h2>Create a Gaming Profile</h2>
          <p>Create a gaming profile and showcase your skills, experience, and favorite games to the community.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_peoples_two_.svg">
          <h2>Find Partners to Play With</h2>
          <p>Find and connect with like-minded gamers based on your favorite games, skill level, and other criteria. Expand your gaming circle and discover new players to play with.</p>
        </div>
        <div class="fet">
          <img src="../assets/icon_muscle_.svg">
          <h2>Collaborate and Improve </h2>
          <p>Collaborate with other gamers, learn from their experiences, and improve your own skills. Play together, share tips and tricks, and enhance your gaming experience.</p>
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
  <Footer @openA="toggleAbout" @openT="toggleTerms" />
</template>

<script>
import Footer from '../components/footer.vue'
import about from '../components/about.vue'
import terms from '../components/terms.vue'

export default {
  name: 'landingpage',
  components: {
    Footer,
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
  background-image: url(../assets/bgr.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -53%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.home {
  box-sizing: border-box;
  background: var(--LLS);
  border: 1px solid var(--stroke);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  width: 90%;
  padding: 5px 20px;
  padding-bottom: 10px;
}

.Features {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  padding-top: 20px;
  gap: 50px;

}

.fet {
  color: var(--white);
  width:400px;
  padding: 10px;
}

h2 {
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;

}



#logo {
  width: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
}

#find {
  font-size: 70px;
  color: var(--white);
  margin: 0;
  padding-bottom: 30px;
  padding-top: 25px;
  line-height: 15px;
  font-weight: 200;
}

#gaming {
  font-size: 77px;
  font-weight: 600;
  color: transparent;
  letter-spacing: 0.03em;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: var(--main);
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
}

#let {
  padding: 10px 60px;
}

</style>
