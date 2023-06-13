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
                <li v-for="user in followingUsers" :key="user._id" class="line">
                    <img class="profilepicture" :src="user.Picture" :class="{ me: (user._id === id) }"
                        @click.self="movetoprofile(user._id)" />
                    <p class="user" @click.self="movetoprofile(user._id)">{{ user.GamerTag }}</p>
                    <button class="follow" v-if="followingorfollowers === 'following' && myprofile"
                        @click="unfollow(user)">Unfollow</button>
                    <button class="follow" v-if="followingorfollowers === 'followers' && myprofile"
                        @click="remove(user)">Remove</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
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
        myprofile: {
            type: Boolean,
            required: false,
            default: false,
        },
        followingorfollowers: {
            type: String,
            required: false,
            default: "following",
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
            this.searchResults = [];

            this.$router.push({ name: 'profile', query: { id: this.userId }, params: { differentUserId: id } });

            this.$emit('openProfile', id)
            this.closePopup();
        },
        preventScroll(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        },
        unfollow(user) {
            console.log("follow:", user);
            var addr = "https://backend-project-vzn7.onrender.com/unfollow";
            var objecttopass = {
                id1: this.id,
                id2: user,
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                window.location.reload();

            });
        },
        remove(user) {
            var addr = "https://backend-project-vzn7.onrender.com/unfollow";
            var objecttopass = {
                id1: user,
                id2: this.id,
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                window.location.reload();
            });
        },
        async requestfromserverpost(addr, objecttopass) {
            console.log("addr:", addr);
            this.isloading = true;
            try {
                const response = await axios.post(addr, objecttopass);
                this.isloading = false;
                var res = response.data;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
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

.profilepicture:hover {
    border: 2px solid var(--main);
}

.line {
    display: flex;
    align-items: center;
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

.user:hover {
    color: var(--main);
    cursor: pointer;
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

.follow {
    margin-left: auto;
    margin-right: 10px;
    background-color: var(--main);
    border: none;
    border-radius: 5px;
    color: var(--white);
    padding: 5px;
    font-size: 15px;
    cursor: pointer;
}

.follow:hover {
    background-color: var(--hover);
}
</style>
  