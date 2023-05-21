<template>
    <div class="backdrop" @click.self="closePopup">
        <div class="popup">
            <img v-if="!closehover" @click="closePopup" id="close" class="x" src="../assets/closeoverlay.svg"
                @mouseenter="closehover = !closehover" />
            <img v-else @click="closePopup" id="close" class="x" src="../assets/closehover.svg"
                @mouseout="closehover = !closehover" />
            <h2>{{ heading }}</h2>
            <ul class="userlist">
                <li  v-for="user in followingUsers" :key="user._id" class="line" @click="movetoprofile(user._id)">
                    <img class="profilepicture" :src="user.Picture" />
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
        };
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
  
<style>

.popup {
    position: absolute;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    min-height: 350px;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--thirdcolor);
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    z-index: 100;
}

.x {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
}

h2 {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 400;

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
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
}

.line {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
}

.line:hover {
    background-color: var(--pagebgcolor);
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

.userlist li:last-child {
  border-radius: 0 0 15px 15px;
}

</style>
  