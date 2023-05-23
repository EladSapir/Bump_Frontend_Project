<template>
    <div class="backdrop" @click.self="closePopup">
      <div class="popup">
        <div class="header">
          <h2>{{ heading }}</h2>
          <img v-if="!closehover" @click="closePopup" id="close" class="x" src="../assets/closeoverlay.svg"
            @mouseenter="closehover = !closehover" />
          <img v-else @click="closePopup" id="close" class="x" src="../assets/closehover.svg"
            @mouseout="closehover = !closehover" />
        </div>
        <ul class="userlist" :class="{ 'more-than-six': isMoreThanSix }">
          <li v-for="user in followingUsers" :key="user._id" class="line" @click="movetoprofile(user._id)">
            <img class="profilepicture" :src="user.Picture" :class="{ me: (user._id === id) }" />
            <p class="user">{{ user.GamerTag }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
export default {
    props: {
        followingUsers: {
            type: Array,
            required: true,
            default: () => [],
        },
        heading: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            closehover: false,
            id: this.$route.query.id,
        };
    },
    computed: {
        isMoreThanSix() {
            return this.followingUsers.length > 6;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.preventScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.preventScroll);
    },
    methods: {
        closePopup() {
            window.removeEventListener("scroll", this.preventScroll);
            this.$emit('close');
        },
        movetoprofile(id) {
            this.$router.push({ path: '/profile', query: { id: id } });
        },
        preventScroll(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        },
    },
};
</script>
  
<style scoped>
.popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: var(--thirdcolor);
  border: 1px solid #323244;
  border-radius: 25px;
  overflow-y: scroll;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--thirdcolor);
  padding: 10px;
  z-index: 1;
}

.x {
  width: 30px;
  cursor: pointer;
}

h2 {
  position: sticky; 
  top: 0;
  text-align: center;
  font-weight: 400;
  padding: 10px; 
}

.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.692);
    width: 100%;
    height: 100%;
    z-index: 10;
}

.profilepicture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    border: 2px solid var(--white);
}

.line {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
}

.line:hover {
    background-color: var(--hover);
    cursor: pointer;
}

.me {
    border: 2px solid var(--main);
}


.user {
    color: var(--white);
    font-size: 15px;
}

.userlist {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: var(--thirdcolor);
}

.userlist.more-than-six li:last-child {
    border-radius: 0 0 25px 25px;
}


</style>
  