<template>
    <div class="container">
        <div class="forerror">
            <form class="editprofile" autocomplete="off">
                <div class="password-container">
                    <h3>Password</h3>
                    <input :class="{ error: !isPasswordValid }" :type="passwordFieldType" class="form-control"
                        v-model="password" placeholder="Notyourtypical123">
                    <img src="../assets/eye-slash-solid.svg" @click="switchVisibility" class="eye" v-if="show"
                        id="eyeslash">
                    <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
                </div>

                <div>
                    <h3>Gamer Tag</h3>
                    <input type="text" v-model="gamerTag" placeholder="Thebestgamer1234">
                </div>

                <div class="password-container ">
                    <h3>Confirm Password</h3>
                    <input :class="{ error: !isConfirmPasswordValid }" :type="passwordFieldTypec" v-model="confirmPassword"
                        placeholder="Notyourtypical123">
                    <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibilityConfirm" v-if="showc"
                        id="eyeslash">
                    <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibilityConfirm" v-else>
                </div>

                <div class="btn" @click="updateprofile">Update</div>
            </form>

            <span v-if="error" class="errormsg" v-html="error"></span>
        </div>
        <div class="deleteAccount">
            <div class="deleteAccount__text">
                <h3>Do you wish to delete your account?</h3>
                <p>Deleting your account will remove all you user data and preferences for the website and they wont be able
                    to
                    be recovered</p>
            </div>
            <button class="btn deletebtn" @click="deleteaccount = true">Delete My Account</button>
        </div>
        <deleteaccount @closeA="deleteA" v-if="deleteaccount" />

    </div>
</template>

<script>
import deleteaccount from "./deleteaccount.vue";
import axios from "axios";
export default {
    name: "editprofile",
    components: {
        deleteaccount
    },
    data() {
        return {
            password: "",
            confirmPassword: "",
            show: true,
            showc: true,
            passwordFieldType: "password",
            passwordFieldTypec: "password",
            error: '',
            gamerTag: '',
            isConfirmPasswordValid: true,
            isPasswordValid: true,
            deleteaccount: false
        };
    },

    methods: {
        deleteA(deleteornot) {
            this.deleteaccount = false
            if (deleteornot) {
                console.log("delete account")
            }
        },
        PasswordValidation() {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            this.isPasswordValid = passwordPattern.test(this.password);

        },
        ConfirmPasswordValidation() {
            this.isConfirmPasswordValid = (this.confirmPassword === this.password);
        },
        switchVisibility() {
            this.show = !this.show;
            if (this.passwordFieldType === "password") {
                this.passwordFieldType = "text";
            } else {
                this.passwordFieldType = "password";
            }
        },
        builderror() {
            console.log("build error:" + this.error);
            if (!this.isPasswordValid && this.isConfirmPasswordValid) {
                this.error = "Please enter a valid password"
            }
            else if (this.isPasswordValid && !this.isConfirmPasswordValid) {
                this.error = "Passwords do not match"
            }
            else if (!this.isPasswordValid && !this.isConfirmPasswordValid) {
                this.error = "Please enter a valid password and confirm password"
            }
            if (!this.isPasswordValid) {
                this.error = this.error + "<br>• Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number"
            }
        },
        switchVisibilityConfirm() {
            this.showc = !this.showc;
            if (this.passwordFieldTypec === "password") {
                this.passwordFieldTypec = "text";
            } else {
                this.passwordFieldTypec = "password";
            }
        },
        updateprofile() {
            this.PasswordValidation()
            this.ConfirmPasswordValidation()
            if (this.isPasswordValid && this.isConfirmPasswordValid) {
                console.log("update profile:" + "gamerT: " + this.gamerTag + "pass: " + this.password + "Cpass: " + this.confirmPassword)
                this.$emit('updateprofile')
            }
            else {
                this.builderror()
            }
        }
    },
};
</script>

<style scoped>
.container {
    width: fit-content;
    height: fit-content;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    border-radius: 15px;
    z-index: 0;
    padding: 30px 30px 0 30px;
    margin-top: 30px;
}

.editprofile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.forerror {
    border-bottom: 2px solid var(--stroke);
    padding-bottom: 40px;

}

input {
    width: 300px;
    height: 51px;
    border: 2px solid var(--white);

}

.errormsg {
    color: var(--error);
}


.password-container {
    position: relative;
}

.eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 42px;
    right: 15px;
    cursor: pointer;
    opacity: 0.8;
}

.error {
    border: 2px solid red;
}

.btn {
    margin-top: 25px;
    background: var(--thirdcolor);
    border: 1px solid var(--white);
    border-radius: 15px;
    color: var(--main);
    padding: 0;
    padding-top: 12px;
    height: 43px;
    cursor: pointer;
    width: 320px;
}

.btn:hover {
    background: var(--main);
    color: var(--white);
    transition: 0.3s;
}

.deleteAccount {
    display: flex;
    align-items: center;
    padding: 30px 0;
}

.deleteAccount__text {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    width: 320px;
}

.deletebtn {
    height: 55px;
    padding: 0;
    margin: 0;
}
</style>