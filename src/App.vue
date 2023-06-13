<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Footer,
  },
}

</script>

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
  --footer: #e545258f;
  --LLS: #161823d3;
  --secondarycolor: #33415B;
  --thirdcolor: #232633;
  --warning: #FFB300;
  --white: #FFFFFF;
  --stroke: #ffffff10;
  --hovercolor: #FF6A4D;
  --mainfont: 'Poppins', sans-serif;
  --textinput: rgba(0, 0, 0, 0.5);
  --black: #000000;
  --grey: #ffffff4d;
  --hover: #ffffff1a;
  --shadow: rgba(0, 0, 0, 0.25);
}

* {
  margin: 0;
  padding: 0;

  font-family: 'Poppins';
}

body {
  background: var(--background);
  height: 100%;
}




h1 {
  color: var(--white);
  font-size: 40px;
  font-weight: 600;
  margin: 0;

}

h2 {
  color: var(--white);
  font-size: 17px;
  margin: 0;

}

h3 {
  color: var(--white);
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;

}

p {
  font-size: .9375rem;
  color: var(--white);
  font-weight: 400;
  margin: 0;



}

span {
  font-size: .8125rem;
  color: var(--white);
  margin: 0;

}


::-webkit-scrollbar {
  width: 0px;
}



input {
  background: var(--white);
  border-radius: 15px;
  outline: none;
  font-size: 16px;
  display: block;
  width: 455px;
  height: 55px;
  border: 1px solid var(--white);
  color: var(--black);
  padding: 0;
  padding-left: 15px;
}

input:hover,
input:focus {
  background: var(--white);
  border: 1px solid var(--main);
}


select {
  background: var(--white) url("assets/dropdownarrow.svg") no-repeat;
  background-position: right 15px center;
  /* Move the arrow to the right */
  height: 45px;
  width: 430px;
  border-radius: 15px;
  outline: none;
  font-size: 16px;
  border: none;
  color: var(--black);
  padding-left: 15px;
  appearance: none;
  cursor: pointer;
  /* Hide the default arrow */
  -webkit-appearance: none;
  /* For Safari */
  -moz-appearance: none;
  /* For Firefox */
}

select:hover,
select:focus {
  background: var(--white) url("assets/dropdownarrowhover.svg") no-repeat;
  border: 1px solid var(--main);
  background-position: right 15px center;
}




option {
  font-size: 16px;
  font-family: var(--mainfont);
  color: var(--black);
}




.btn {
  padding: 20px 40px;
  background: var(--main);
  border: 1.5px solid var(--main);
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
  color: var(--white);
  font-weight: 600;
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
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}
</style>
