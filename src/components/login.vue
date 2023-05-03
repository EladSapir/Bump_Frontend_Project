<template>
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  
  <button type="submit">Login</button>
</form>
<p>Not registered yet? <a @click="moveTosignUp">Register here</a>.</p>
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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

label, input {
  margin: 10px 0;
}

input[type="email"], input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0062cc;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>