<template>
    <div class="backdrop" @click.self="closePopup">
        <div class="popup">
            <img v-if="!closehover" @click="closePopup" id="close" class="x" src="../assets/closeoverlay.svg"
                @mouseenter="closehover = !closehover" />
            <img v-else @click="closePopup" id="close" class="x" src="../assets/closehover.svg"
                @mouseout="closehover = !closehover" />
            <h2>{{ heading }}</h2>
            <ul v-for="user in followingUsers" :key="user._id">
                <div class="line" @click="movetoprofile(user._id)">
                    <img class="profilepicture" :src="user.Picture" />
                    <li>{{ user.GamerTag }}</li>
                </div>
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
    flex-direction: column;
    padding: 20px;
    min-height: 350px;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2c394b;
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

</style>
  