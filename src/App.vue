<template>
  <router-view />
  <link rel="stylesheet" href="https://use.typekit.net/kji8pud.css%22%3E">
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext');

:root {
  --approve: #09B261;
  --background: #1B1E29;
  --error: #FF0000;
  --white: #EFEFEF;
  --main: #E54425;
  --misc: #00BAFF;
  --pagebgcolor: #161823;
  --secoundarycolor: #33415B;
  --thirdcolor: #232633;
  --warning: #FFB300;
  --white: #FFFFFF;
  --stroke: #ffffff10;
  --hovercolor: #FF6A4D;
  --mainfont: 'Poppins', sans-serif;
}

html,
body {
  font-family: 'Poppins';
  background-image: url(./assets/bgr.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0;
}

h1 {
  color: var(--white);
  font-size: 25px;
}

h2 {
  color: var(--white);
  font-size: 17px;
}

h3 {
  color: var(--white);
  font-size: 15px;
  font-weight: 200;
}

p {
  font-size: 12px;
  color: var(--white);
}

input {
  margin: 5px 0px 5px 0px;
  height: 20px;
  border-radius: 15px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  background: #ecf0f3;

  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
}



select {
  background: #ecf0f3;
  margin: 5px 0px 5px 0px;
  height: 24px;
  width: 220px;
  border-radius: 15px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  padding: 10px 11px 10px 10px;
  border: none;
}

option {
  font-size: 12px;
  font-family: var(--mainfont);
}

.btn {
  padding: 20px 40px;
  background: var(--main);
  border: 1.5px solid var(--main);
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background: var(--hovercolor);
  border: 1.5px solid var(--hovercolor);
}

.link {
  text-decoration: none;
  color: var(--white);
  height: 100%;
}

.link:hover {
  color: var(--main);
}

::placeholder {
  font-family: poppins;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
