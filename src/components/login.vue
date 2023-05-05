<template>
  <div class="logincontainer">

    <form action="/login" method="POST">
      <img id="logo" src="../assets/logo.png">
      <h1>Login</h1>
      <input type="email" placeholder="Email" id="email" name="email" required>
      <div class="password-container">
      <input :type="passwordFieldType" placeholder="Password" v-model="password" id="password" required>
      <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibility" v-if="show"  id="eyeslash">
      <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
      </div>
      <button class="btn" type="submit">Login</button>
      <p>Not a member yet? <a class="regislink" @click="moveTosignUp">Register here.</a></p>
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

input {
  background: #ecf0f3;
  margin: 5px 0px 5px 0px;
  height: 20px;
  width: 222.5px;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
  transition: background-color 0.5s ease;
}

p {
  color: white;
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

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
}

</style>