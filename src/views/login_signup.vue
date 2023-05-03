<template>
  <div class="box">
    <div class="sign-up" v-show="isLogin">
      <div>
        <signup />
      </div>
    </div>
    <div class="sign-up" v-show="!isLogin">
      <div>
        <login @openSingUp="toggleLogin"/>
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
import login from '../components/login.vue'
import signup from '../components/signup.vue'

export default {
  name: 'homeView',
  components: {
    landingfooter,
    signup,
    login
  },
  data() {
    return {
      isLogin: false,
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
    },
    toggleLogin() {
      this.isLogin = !this.isLogin
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

/* .home {
  box-sizing: border-box;
  padding: 20px;
  background: #2c394bd7;
  border: 1px solid #323244;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  width: 90%;
} */





.land {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
