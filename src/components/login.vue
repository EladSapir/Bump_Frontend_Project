<template>
  <div class="logincontainer">

    <form action="/login" method="POST">
      <img id="logo" src="../../public/Logo1.svg">
      <h1>Login</h1>
      <input type="email" placeholder="Email" id="email" name="email" required>
      <div class="password-container">
      <input :type="passwordFieldType" placeholder="Password" v-model="password" name="password" id="password" required>
      <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibility" v-if="show"  id="eyeslash">
      <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
      </div>
      <router-link to="/homepage"><button class="btn" type="submit">Login</button></router-link>
      <p>Not a member yet? <a class="regislink" @click="moveTosignUp">Register here</a></p>
    </form>
  </div>
</template>


  
<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      show: true,
      passwordFieldType: "password"
    }
  },
  methods: {
    moveTosignUp() {
      this.$emit('openSingUp')
    },
  switchVisibility() {
      this.show = !this.show
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
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
  width: 60px;
  height: 60px;
  margin-top: -20px;
  margin-bottom: -10px;
}

h1 {
  font-size: 32px;
  margin-bottom: 15px;
}

.group {
  position: relative;
  margin-bottom: 15px;
}


</style>