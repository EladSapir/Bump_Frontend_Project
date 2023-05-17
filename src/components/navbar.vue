<template>
  <header class="main-header">
    <nav class="nav-menu">
      <div class="nav-left">
        <img src="../../public/Logo1.svg" class="logo" @click="movetohomepage">
        <img src="../assets/bumpword.svg" alt="Bump" class="bumpword" @click="movetohomepage">
        <a @click="movetomyprofile" class="profile-link">My Profile</a>
      </div>
      <div class="nav-center">
        <div class="search-container">
          <input type="text" placeholder="Search" class="search" v-model="searchQuery" @keyup.enter="searchUsers">
          <img src="../assets/search.svg" alt="Search" class="search-icon">
          <ul v-if="searchResults.length" class="dropdown">
            <li v-for="result in searchResults" :key="result.id">{{ result.username }}</li>
          </ul>
        </div>

      </div>
      <div class="nav-right">
        <button class="btn" @click="movetomatching">Let's Bump</button>
        <div class="notidiv">
        <img class="notiimg" src="../assets/noti_off.svg" @click="toggleDropdown">
        <div class="dropdownnoti" :class="{ active: isDropdownActive }">
          <ul>
            <li v-for="notification in notifications" :key="notification">{{ notification }}</li>
          </ul>
        </div>
        </div>
        <img class="logout" src="../assets/logout.svg" alt="Logout" @click="logout">
      </div>

    </nav>
  </header>
  <div class="backdrop" v-if="isloading">
    <div class="container">
      <loading />
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import loading from './loading.vue'
export default {
  name: "navbar",
  components: {
    loading
  },
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      notifications: ["Notification 1", "Notification 2", "Notification 3", "Notification 4", "Tomer Gay", "Elad Gay"], // need to change
      isDropdownActive: false,
      userId: this.$route.query.id,
      isloading: false,
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  methods: {
    async searchUsers() {
      if (this.searchQuery.trim() === "") {
        this.searchResults = [];
        return;
      }
      else {
        try {
          var addr = 'https://backend-project-vzn7.onrender.com/search';
          const response = await axios.post(addr, {
            "searchQuery": this.searchQuery.trim(),
            "userId": this.userId,
          })
          this.searchResults = response.data
        } catch (error) {
          console.error(error);
        }
      }
    },
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    },
    async logout() { 
      try {
        this.isloading = true;
        var addr = 'https://backend-project-vzn7.onrender.com/logout/' + this.userId;
        console.log('logout:' + addr);
        const response = await axios.get(addr, {});
        const res = response.data;
        console.log("logout:" + res);
        if (res) {
          this.$router.push('/login_signup')
        }
      } catch (error) {
        console.error(error);
        console.log(error);
      }
      this.isloading = false;
    },
    movetomyprofile() {
      this.$router.push({ name: 'profile', query: { id: this.userId } ,params: {differentUserId: this.userId } });
    },
    movetomatching() {
      this.$router.push({ name: 'matching', query: { id: this.userId } });
    },
    movetohomepage() {
      this.$router.push({ name: 'homepage', query: { id: this.userId } });
    },
    handleBeforeUnload() {
      this.logout();
    }
  }
};

</script>
  
<style scoped>
.main-header {
  background-color: var(--pagebgcolor);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 1px solid var(--stroke);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.nav-menu {
  display: flex;
  width: 100%;
  padding: 0 30px;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

.nav-left {
  flex: 1;
}

.nav-right {
  flex: 1;
  justify-content: flex-end;
}

.logo {
  display: flex;
  height: 55px;
  width: 55px;
  margin-right: 20px;
}

.logo:hover {
  cursor: pointer;
}

.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: none;
  background-color: var(--thirdcolor);
  border-radius: 30px;
  padding: 10px 40px 10px 20px;
  margin-right: 10px;
  color: var(--white);
  border: 2px solid var(--stroke);
  font-family: var(--mainfont);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  width: 150px;
  height: 20px;
  transition: all 0.3s ease;
}

.search:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 5px var(--accent);
  width: 250px;
}

.search::placeholder {
  color: #b9b9b9;
  font-family: var(--mainfont);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
}

.search::-webkit-input-placeholder,
.search:focus::-webkit-input-placeholder,
.search::-moz-placeholder,
.search:focus::-moz-placeholder,
.search:-moz-placeholder,
.search:focus:-moz-placeholder,
.search:-ms-input-placeholder,
.search:focus:-ms-input-placeholder {
  /* Placeholder styles */
  color: var(--white);
  opacity: 0.6;
}

.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.search:focus+.search-icon {
  fill: var(--accent);
  transform: translateY(-50%) rotate(90deg);
}


.profile-link {
  color: var(--white);
  text-decoration: none;
  margin-right: 20px;
  transition: 0.5s;
}

.profile-link:hover {
  text-decoration: underline;
  text-decoration-color: var(--main);
  cursor: pointer;

}

.notidiv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.notiimg {
  margin-right: 20px;
  height: 30px;
  width: 30px;
}

.notiimg:hover {
  cursor: pointer;
}

.logout {
  height: 30px;
  width: 30px;
}

.logout:hover {
  cursor: pointer;
}

.bumpword {
  margin-right: 20px;
  margin-left: -20px;
  height: 30px;
  width: 80px;
}

.bumpword:hover {
  cursor: pointer;
}

.btn {
  margin-right: 40px;
  padding: 8px 20px;
}

.dropdownnoti {
  display: none;
  top: 100%;
  position: absolute;
  background-color: var(--pagebgcolor);
  min-width: 250px;
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid var(--stroke);
  border-radius: 0 0 15px 15px;
  z-index: 1;
}

.dropdownnoti.active {
  display: block;
}




.container {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 60%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--pagebgcolor);
  border: 1px solid #323244;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  z-index: 10;

}

.backdrop {
  z-index: 10;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.692);
  width: 100%;
  height: 100%;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  background-color: var(--thirdcolor);
  border-radius: 0 0 15px 15px;
  padding: 10px;
  list-style: none;
  margin: 0;
  overflow-y: auto;
  border: 2px solid var(--stroke);
  z-index: 1;
}

.dropdown li {
  color: var(--white);
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown li:hover {
  background-color: var(--accent);
}
</style>
  