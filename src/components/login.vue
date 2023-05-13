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
  }

 input{
  height: 55px;
  margin: 10px 0;
 }

  .error {
    color: var(--error);
  }

.password-container {
    position: relative;
  }

  .eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translate(0, -50%);
    right: 15px;
    cursor: pointer;
    opacity: 0.8;
  }

  button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 2px;
    width: 100%;
    padding: 10px 180px;
    height: 55px;
  }

  p {
    font-size: 15px;
    margin:0;
    margin-top:30px;
  }

  .logincontainer {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #2c394bd7;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 60px;
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
    width: 80px;
    height: 80px;
  }

  h1{
    margin:0;
    margin-bottom: 23px;
  }
 
</style>
