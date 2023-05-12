<template>
  <div class="logincontainer">
    <form @submit.prevent="submitForm" v-if="!isLoading">
      <img id="logo" src="../../public/Logo1.svg">
      <h1>Login</h1>
      <input type="email" placeholder="Email" v-model="email" required>
      <div class="password-container">
        <input :type="passwordFieldType" placeholder="Password" v-model="password" required>
        <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibility" v-if="show" id="eyeslash">
        <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
      </div>
      <button class="btn" type="submit">Login</button>
      <p>Not a member yet? <a class="regislink" @click="moveTosignUp">Register here</a></p>
    <span class="error">{{error}}</span>
    
    </form>
    <loading v-else />
   
  </div>
</template>


<script>
import axios from 'axios';
import loading from './loading.vue'
export default {
  name: 'login',
  components: {
    loading
  },
  data() {
    return {
      email: '',
      password: '',
      show: true,
      passwordFieldType: "password",
      error: ' ',
      isLoading: false,
    }
  },
  methods: {
    moveTosignUp() {
      console.log("move to sign up")
      this.$emit('openSingUp')
    },
    switchVisibility() {
      this.show = !this.show
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    async submitForm() {
      try {
        this.isLoading = true;
        const response = await axios.post('https://backend-project-vzn7.onrender.com/login', {
          email: this.email,
          password: this.password
        });
       
        // Extract the user ID from the response
        const userId = response.data;
   
        if(userId==="already logged in")
        {
          console.log(userId);
            this.error = response.data;
        }
        else if(userId==="email/password not right")
        {
            this.error = response.data;
        }
        else {    
          // Redirect to the homepage
          this.$router.push({ name: 'homepage', query: { id: userId.id } });
          
        }
      } catch (error) {
        console.error(error);
        // Handle the error (e.g., show an error message)
      }
      this.isLoading = false;
    }
  }
}
</script>


<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .password-container {
    position: relative;
    width: 315px;
  }

  .error {
    color: var(--error);
  }

  .eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 28%;
    right: 4%;
    cursor: pointer;
    opacity: 0.8;
  }

  button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 2px;
    padding: 9px 137px;
    border-radius: 5px;
  }

  p {
    margin-top: 20px;
    font-size: 15px;
  }

  .logincontainer {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 400px;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 30px 30px 30px;
    background: #2c394bd7;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  .regislink {
    color: #FF5810;
    text-decoration: none;
  }

  .regislink:hover {
    color: #FF5810;
    text-decoration: underline;
    cursor: pointer;
  }

  #logo {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-top: -25px;
    margin-bottom: -10px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .group {
    position: relative;
    margin-bottom: 15px;
  }
</style>
