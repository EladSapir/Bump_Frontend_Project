<template>
  <div class="box">
    <div class="sign-up" v-show="isLogin">
      <div>
        <signup @openlogin="toggleLogin" />
      </div>
    </div>
    <div class="sign-up" v-show="!isLogin">
      <div>
        <login @openSingUp="toggleLogin" />
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
    <Footer @openA="toggleAbout" @openT="toggleTerms" />
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import about from '../components/about.vue'
import terms from '../components/terms.vue'
export default {
  name: 'homeView',
  components: {
    Footer,
    signup,
    login,
    about,terms
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
      console.log(this.showAbout)
    },
    toggleTerms() {
      this.showTerms = !this.showTerms
      this.showAbout = false;
      console.log(this.showTerms)
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

.land {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
