<template>
  <header class="main-header">
    <nav class="nav-menu">
      <div class="nav-left">
        <img src="../../public/Logo1.svg" class="logo" @click="movetohomepage">
        <img src="../assets/bumpword.svg" alt="Bump" class="bumpword" @click="movetohomepage">
        <a @click="movetomyprofile" class="profile-link">My Profile</a>
      </div>
      <div class="nav-center">
        <div ref="searchContainer" class="search-container" :class="{ searched: searchResults.length }">
          <input type="text" placeholder="Search" class="search" v-model="searchQuery" @input="searchUsers"
            @focus="isSearchFocused = true" @blur="handleSearchBlur">
          <img src="../assets/search.svg" alt="Search" class="search-icon">
          <ul v-if="searchResults.length" :class="['dropdown', { 'expanded': isSearchFocused }]">
            <li v-for=" result  in  searchResults " :key="result._id" @click="movetoprofile(result._id)">
              <img class="searchimg" :src="result.Picture" :class="{ me: (result._id === userId) }"
                alt="Profile Picture" />
              <p>{{ result.GamerTag }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-right">
        <button class="btn" @click="movetomatching">Let's Bump</button>

        <div class="notidiv">
          <img v-if="notifications.length === 0" class="notiimg" src="../assets/noti_off.svg" @click="toggleDropdown">
          <img v-else class="notiimg" src="../assets/closed.svg" @click="toggleDropdown">
          <div class="dropdownnoti" :class="{ active: isDropNotiActive }">
            <div class="triangle"></div>  
            <div class="triangle1"></div>
            <h3>Notifications</h3>
            <ul>
              <li v-for="notification in notifications" :key="notification">
                <img class="notiimg" src="../assets/bumpnofi.svg" alt="Notification" />
              {{ notification }}</li>
            </ul>
          </div>
        </div>


        <img class="logout" src="../assets/logout.svg" alt="Logout" @click="logout">
      </div>
    </nav>
  </header>
  <loading v-if="isloading" />
</template>
  
<script>
import axios from 'axios';
import loading from './loading.vue'
import { debounce } from 'lodash';

export default {
  name: "navbar",
  components: {
    loading
  },
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      notifications: ["Notification 1", "Notification 2", "Notification 3", "Notification 4"],
      isDropNotiActive: false,
      userId: this.$route.query.id,
      isloading: false,
      clickOutsideListener: null,
      defaultProfilePicture: 'https://res.cloudinary.com/dk9nwmeth/image/upload/v1619629599/ProfilePictures/default_profile_picture.png',
      closeResultsTimeout: null,
      isSearchFocused: false,
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    this.clickOutsideListener = this.handleClickOutside.bind(this);
    window.addEventListener("click", this.clickOutsideListener);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
    window.removeEventListener("click", this.clickOutsideListener);
  },
  methods: {
    handleSearchBlur() {
      this.isSearchFocused = false;
      this.cancelCloseSearchResults();
    },
    closeSearchResults() {
      this.closeResultsTimeout = setTimeout(() => {
        this.searchResults = [];
      }, 200);
    },
    cancelCloseSearchResults() {
      if (this.closeResultsTimeout) {
        clearTimeout(this.closeResultsTimeout);
      }
    },
    searchUsers: debounce(async function () {
      if (this.searchQuery.trim() === "") {
        this.searchResults = [];
        return;
      } else {
        try {
          console.log(this.searchQuery);
          this.searchResults = [];
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
    }, 300),
    toggleDropdown() {
      this.isDropNotiActive = !this.isDropNotiActive;
    },
    async logout() {
      try {
        this.$router.push('/login_signup')

        this.isloading = true;
        var addr = 'https://backend-project-vzn7.onrender.com/logout/' + this.userId;
        console.log('logout:' + addr);
        const response = await axios.get(addr);

        var res = response.data;
        console.log("logout:" + res);

      } catch (error) {
        console.error(error);
        console.log(error);
      }
      this.isloading = false;
    },
    movetomyprofile() {
      console.log('before push' + this.userId + ' dif ' + this.$route.query.id)
      this.$router.push({ name: 'profile', query: { id: this.userId }, params: { differentUserId: this.userId } });

      this.$emit('openProfile', this.userId)
    },
    movetomatching() {
      this.$router.push({ name: 'matching', query: { id: this.userId } });
    },
    movetohomepage() {
      this.$router.push({ name: 'homepage', query: { id: this.userId } });
    },
    handleBeforeUnload() {
      this.logout();
    },
    movetoprofile(id) {
      this.searchResults = [];
      this.$router.push({ name: 'profile', query: { id: this.userId }, params: { differentUserId: id } });
      this.$emit('openProfile', id)
    },
    handleClickOutside(event) {
      const isClickedInsideSearchContainer = this.$refs.searchContainer && this.$refs.searchContainer.contains(event.target);
      const isClickedInsideDropdown = event.target.closest(".dropdown");
      if (!isClickedInsideSearchContainer && !isClickedInsideDropdown) {
        this.searchResults = [];
      } else {
        this.cancelCloseSearchResults();
      }
    }


  }
};

</script>
  
<style scoped>
.main-header {
  background-color: var(--pagebgcolor);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 2px solid var(--stroke);
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
}

.search-container.searched .search {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
}

.search-container.searched .dropdown {
  display: block;
}

.search {
  border: none;
  background-color: var(--thirdcolor);
  border-radius: 15px;
  color: var(--white);
  border: 2px solid var(--stroke);
  font-family: var(--mainfont);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  width: 200px;
  height: 40px;
  transition: all 0.2s ease;
}

.searchimg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid var(--white);
  margin-right: 20px;
  margin-left: 10px;
}

.search:focus {
  outline: none;
  border-color: var(--white);
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

.dropdown {
  position: absolute;
  display: none;
  left: 0;
  width: 215px;
  background-color: var(--thirdcolor);
  border-radius: 0 0 15px 15px;
  list-style: none;
  border: 2px solid var(--stroke);
  border-top: none;
  top: 48px;
  margin-top: 0;
  z-index: 1;
  margin: 0;
  padding-left: 0;
  max-height: 270px;
  overflow-y: auto;
  transition: all 0.2s ease;

}

.dropdown.expanded {
  width: 265px;
  border: 2px solid var(--white);
  border-top: none;
}

.dropdown li {
  color: var(--white);
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.dropdown li:last-child {
  border-radius: 0 0 15px 15px;
}

.dropdown li:hover {
  background-color: var(--hover);
  cursor: pointer;
}

.me {
  border: 2px solid var(--main);
}


.search::-webkit-input-placeholder,
.search:focus::-webkit-input-placeholder,
.search::-moz-placeholder,
.search:focus::-moz-placeholder,
.search:-moz-placeholder,
.search:focus:-moz-placeholder,
.search:-ms-input-placeholder,
.search:focus:-ms-input-placeholder {
  color: var(--white);
  opacity: 0.6;
}

.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}


.search:focus+.search-icon {
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
  cursor: pointer;
}

.dropdownnoti {
  display: none;
  position: absolute;
  top: 100%;
  margin-top: 15px;
  background-color: var(--pagebgcolor);
  min-width: 250px;
  max-height: 200px;
  border: 1px solid var(--stroke);
  padding: 5px;
  border-radius: 5px;
  border: 3px solid var(--stroke);
  margin-right: 240px;
  padding: 10px;
}


.dropdownnoti.active {
  display: block;
}

.dropdownnoti .triangle {
  position: absolute;
  top: -15px;
  right: 5px; /* Adjust the left value to center the triangle */
  width: 26px;
  height: 16px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: var(--stroke);
  z-index: -1;
}


.dropdownnoti .triangle1 {
  position: absolute;
  top: -12px;
  right: 8px; /* Adjust the left value to center the triangle */
  width: 20px;
  height: 15px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: var(--pagebgcolor);
}

.dropdownnoti h3 {
  margin: 0;
  padding: 0;
  color: var(--white);
  font-family: var(--mainfont);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.dropdownnoti ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
}

.dropdownnoti li {
  color: var(--white);
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.dropdownnoti li:hover {
  background-color: var(--hover);
  cursor: pointer;
}

.dropdownnoti li:last-child {
  border-radius: 0 0 15px 15px;
}

.dropdownnoti li img {
  margin-right: 10px;
}





/* .container {
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
} */
</style>
  