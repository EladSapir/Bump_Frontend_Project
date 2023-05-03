<template>
  <div class="logincontainer">

    <form>
      <img id="logo" src="../assets/logo.png">
    <h1>Please log in</h1>
      <input type="email" placeholder="Email" id="email" name="email" required>
      <input type="password" id="password" placeholder="Password" name="password" required>
      <button class="btn" type="submit">Login</button>
      <p>Not a member yet? <a class="regislink" @click="moveTosignUp">Register here.</a></p>
    </form>
  </div>
</template>


  
<script>
export default {
  name: 'login',
  methods: {
    moveTosignUp() {
      this.$emit('openSingUp')
    }
  }
}

</script>

<style scoped>
form
{
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
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
  margin-top: 5px;
  padding: 8px 100px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

p {
  color: white;
}

.logincontainer {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 42%;
  width: 22%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
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
  width: 20%;
  margin-top: -20px;
}
</style>