<template>
    <div class="backdrop" @click.self="closedelete">
        <div class="container">
            <img v-if="closehover" @click="closedelete" id="close" src="../assets/closeoverlay.svg"
                @mouseover="closehover = !closehover">
            <img v-else @click="closedelete" id="close" src="../assets/closehover.svg" @mouseout="closehover = !closehover">
            <img id="deleteimg" src="../assets/deleteorange.svg">
            <h1>Are you sure you want to delete this post?</h1>
            <p>Your post will be deleted and wont be able to be recovered, are you sure you want ot delete?</p>
            <div class="deletebuttons">
                <button class="btn deletebtn" @click="deletandclose">Delete</button>
                <button class="btn cancelbtn" @click="closedelete">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            closehover: true,
            deleteornot: false
        }
    },
    props:
        ['deleteornot'],
        mounted() {
    window.addEventListener("scroll", this.preventScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.preventScroll);
  },
    methods: {
        deletandclose() {
            this.deleteornot = true
            this.closedelete()
        },
        closedelete() {
            if (this.deleteornot) {
                console.log("delete" + this.deleteornot)
            }
            window.removeEventListener("scroll", this.preventScroll);
            this.$emit('closeA')
        },
        preventScroll(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    },
    }
}

</script>

<style scoped>
.container {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2C394B;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}

.container #close {
    position: fixed;
    right: 8px;
    top: 10px;
    width: 20px;
    cursor: pointer;
}

.container img {
    width: 5%;
}

#deleteimg {
    width: 80px;
    height: 80px;
}

.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.692);
    width: 100vw;
    height: 100vh;
}

.container h1 {
    text-align: center;
    font-size: 30px;
}

.container p {
    color: var(--white);
    text-align: center;
    margin-bottom: 20px;
}

.btn {
    padding: 10px 20px;
}

.deletebuttons {
    display: flex;
    justify-content: flex-end;
    width: 100%;

}

.deletebtn {
    background-color: transparent;
    border: none;
    font-weight: 200;
    font-size: 16px;
    transition: 0.5s;
}

.deletebtn:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);
    text-decoration-thickness: 2px;
    cursor: pointer;
}
</style>