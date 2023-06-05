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
    login
  },
  data() {
    return {
      isLogin: false,
    }
  },
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
}
</style>
