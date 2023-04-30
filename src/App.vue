<template>
  <router-view/>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

</template>

<style>
html {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding:0;
  background-color:#0A0A11;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #FF5810;
}

nav a.router-link-exact-active {
  color: #FFFDFD;
}
</style>
