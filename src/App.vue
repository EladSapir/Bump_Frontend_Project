<template>
  <router-view />
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</template>

<style>
html,body {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(./assets/bgr.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0;
}

h1 {
  color: #FFFFFF;
  font-size: 25px;
}

h2 {
  color: #FFFFFF;
  font-size: 17px;
}

.btn {
  padding: 20px 40px;
  background: #E64425;
  border: 1.5px solid #E64425;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover {
  background: #FFFFFF;
  border: 1.5px solid #E64425;
  color: #E64425;
}

.link {
  text-decoration: none;
  color: #FFFFFF;
  height: 100%;
}

.link:hover {
  color: #E64425;
}

.h1 {

}

</style>
