<template>
    <div class="backdrop" @click.self="closedelete">
        <div class="container">
            <img v-if="closehover" @click="closedelete" id="close" src="../assets/closeoverlay.svg"
                @mouseover="closehover = !closehover">
            <img v-else @click="closedelete" id="close" src="../assets/closehover.svg" @mouseout="closehover = !closehover">
            <img id="deleteimg" src="../assets/deleteorange.svg">
            <h1>Delete your account?</h1>
            <p>After deleting your account you wont be able to access it and all your data will be deleted.
                Please confirm your action by typing your password here</p>
            <div class="password-container">
                <input :type="passwordFieldType" name="password" class="form-control" v-model="password"
                    placeholder="Notyourtypical123" required>
                <img src="../assets/eye-slash-solid.svg" @click="switchVisibility" class="eye" v-if="show" id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
            </div>
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
            deleteornot: false,
            password: "",
            show: true,
            passwordFieldType: "password",

        }
    },
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
            this.$emit('closeA', this.deleteornot)
        },
        preventScroll(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        },
        switchVisibility() {
            this.show = !this.show;
            if (this.passwordFieldType === "password") {
                this.passwordFieldType = "text";
            } else {
                this.passwordFieldType = "password";
            }
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

.password-container {
    position: relative;
}

.eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 17px;
    right: 15px;
    cursor: pointer;
    opacity: 0.8;
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

.cancelbtn {
    padding: 5px 105px;
    height: 55px;
}

.deletebuttons {
    display: flex;
    margin-top: 20px;

}

input {
    width: 350px;
}

.deletebtn {
    background-color: transparent;
    border: none;
    font-weight: 200;
    font-size: 16px;
    transition: 0.5s;
    padding: 0;
    margin-right: 30px;
}

.deletebtn:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);
    text-decoration-thickness: 2px;
    cursor: pointer;
}
</style>