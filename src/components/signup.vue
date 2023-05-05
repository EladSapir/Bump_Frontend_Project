<template>
    <div class="signupcontainer">
        <div class="signheading">
            <img id="logo" src="../assets/logo.png">
            <h1>Let’s Sign Up</h1>
        </div>
        <form class="parent">
            <div class="form-group div1">
                <h3 class="title">Email</h3>
                <input type="email" class="form-control" v-model="email" placeholder="Yourmailhere@something.com" required>
                <span v-if="!validEmail" class="required">Invalid email format</span>
            </div>


            <div class="form-group password-container div2">
                <h3 class="title">Password</h3>
                <input :type="passwordFieldType" class="form-control" v-model="password" placeholder="Notyourtypical123"
                    required>
                <img src="../assets/eye-slash-solid.svg" @click="switchVisibility" class="eye" v-if="show" id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
                <span v-if="validPassword" class="required">Password must have at least 8 characters, one uppercase letter,
                    one lowercase letter, and one number</span>
            </div>

            <div class="form-group password-container div3">
                <h3 class="title">Confirm Password</h3>
                <input :type="passwordFieldTypec" class="form-control" v-model="confirmPassword"
                    placeholder="Notyourtypical123" required>
                <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibilityConfirm" v-if="showc"
                    id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibilityConfirm" v-else>
                <span v-if="matchPassword" class="required">Passwords do not match</span>
            </div>

            <div class="form-group div4">
                <h3 class="title">Discord Account</h3>
                <input type="text" class="form-control" v-model="discordAccount" placeholder="Enter your Discord account"
                    required>
            </div>

            <div class="form-group div5">
                <h3 class="title">Gamer Tag</h3>
                <input type="text" class="form-control" v-model="gamerTag" placeholder="Enter your gamer tag" required>
            </div>

            <div class="form-group div6">
                <h3 class="title">Favorite Game</h3>
                <select class="form-control" v-model="favoriteGame" required>
                    <option value="">Select your favorite game</option>
                    <option value="Rocket League">Rocket League</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="Valorant">Valorant</option>
                </select>
                <!-- <span v-if="!favoriteGame" class="required">*</span> -->
            </div>
            <div class="form-group div7">
                <h3 class="title">Match info</h3>
                <div class="matchinfo">
                    <select class="form-control region" v-model="matchinfo" required>
                        <option value="">Region</option>
                        <option value="Rocket League">Rocket League</option>
                        <option value="League of Legends">LoL</option>
                        <option value="Valorant">Valorant</option>
                    </select>

                    <select class="form-control mode" v-model="mode" required>
                        <option value="">Mode</option>
                        <option value="Rocket League">Rocket League</option>
                        <option value="League of Legends">League of Legends</option>
                        <option value="Valorant">Valorant</option>
                    </select>
                    <!-- <span v-if="!favoriteGame" class="required">*</span> -->
                </div>
            </div>

            <div class="gen div10">
                <h3 class="title">Gender</h3>
                <div class="form-group gender">
                    <div class="male">
                        <input class="checkbox-tools" type="radio" name="tools" id="tool-1" checked>
                        <label class="for-checkbox-tools" for="tool-1">
                            <img src="../assets/male.svg">
                        </label>
                    </div>
                    <div class="female ">
                        <input class="checkbox-tools" type="radio" name="tools" id="tool-2">
                        <label class="for-checkbox-tools " for="tool-2">
                            <img src="../assets/female.svg" style="width: 13px;">
                        </label>
                    </div>
                    <div class="transgender ">
                        <input class="checkbox-tools" type="radio" name="tools" id="tool-3">
                        <label class="for-checkbox-tools" for="tool-3">
                            <img src="../assets/transgender.svg">
                        </label>
                    </div>
                </div>
            </div>
            <div class="birth-date div9">
                <h3 class="title">Birth date</h3>
                <div class="form-group Birthdate">
                    <select class="form-control" v-model="day" required>
                        <option value="" disabled selected>Day</option>
                        <option v-for="i in 31" :value="i">{{ i }}</option>
                    </select>
                    <select class="form-control" v-model="month" required>
                        <option value="" disabled selected>Month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select class="form-control" v-model="year" required>
                        <option value="" disabled selected>Year</option>
                        <option v-for="i in 17" :value="(new Date()).getFullYear() - i">{{ (new Date()).getFullYear() -
                            i }}
                        </option>
                    </select>
                    <span v-if="validAge" class="required">You must be at least 16 years old</span>
                </div>
            </div>




            <div class="form-group div8">


                <select class="form-control" v-model="Role" required>
                    <option value="">Role</option>
                    <option value="Rocket League">Rocket League</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="Valorant">Valorant</option>
                </select>

                <select class="form-control" v-model="rank" required>
                    <option value="">Select your rank</option>
                    <h3 class="title">Rank</h3>
                    <option v-if="favoriteGame === 'League of Legends'" value="Unranked">Unranked</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Iron">Iron</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Bronze">Bronze</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Silver">Silver</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Gold">Gold</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Platinum">Platinum</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Diamond">Diamond</option>
                    <option v-if="favoriteGame === 'League of Legends'" value="Challenger">Challenger</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Unranked">Unranked</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Iron">Iron</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Bronze">Bronze</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Silver">Silver</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Gold">Gold</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Platinum">Platinum</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Diamond">Diamond</option>
                    <option v-if="favoriteGame === 'Valorant'" value="Immortal">Immortal</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Bronze">Bronze</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Silver">Silver</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Gold">Gold</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Platinum">Platinum</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Diamond">Diamond</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Champion">Champion</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Grand Champion">Grand Champion</option>
                    <option v-if="favoriteGame === 'Rocket League'" value="Supersonic Legend (SSL)">Supersonic Legend (SSL)
                    </option>
                </select>
            </div>


            <div class="form-group div12">
                <h3 class="title">Country</h3>
                <input type="text" class="form-control" v-model="state">
            </div>


            <div class="form-group div13">
                <h3 class="title">Language</h3>
                <input type="text" class="form-control" v-model="language" placeholder="Enter your preferred language"
                    required>
            </div>


            <div class="form-group div11 ">
                <div class="file-upload-form">
                    <h3 class="title">Upload Image</h3>
                    <label class="file-input-label">
                        <input class="file-input" type="file" accept="image/*" @change="previewImage">
                        Upload profile image
                    </label>
                </div>

            </div>

            <p class="error-msg" v-if="error">{{ error }}</p>

        </form>
        <p class="clearbtn div14">Clear</p>
        <button type="submit" class="btn div15" @click.prevent="submitForm">Submit</button>
        <p>already registered? <a class="loginink" @click="moveToLogin">Login here.</a></p>
    </div>
</template>
    
    
      
<script>
export default {
    name: 'login',
    data() {
        return {
            gamerTag: '',
            imageData: "",
            discordAccount: '',
            email: '',
            validEmail: true,
            password: '',
            confirmPassword: '',
            gender: '',
            age: '',
            favoriteGame: '',
            gameUsername: '',
            rank: '',
            state: '',
            language: '',
            profilePhoto: null,
            isSubmitted: false,
            isGamerTagValid: true,
            isDiscordAccountValid: true,
            isEmailValid: true,
            isPasswordValid: true,
            isConfirmPasswordValid: true,
            isGenderValid: true,
            isAgeValid: true,
            isFavoriteGameValid: true,
            isGameUsernameValid: true,
            isRankValid: true,
            show: true,
            passwordFieldType: "password",
            showc: true,
            passwordFieldTypec: "password"

        }
    },
    methods: {
        switchVisibility() {
            this.show = !this.show
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        }, switchVisibilityConfirm() {
            this.showc = !this.showc
            this.passwordFieldTypec = this.passwordFieldTypec === "password" ? "text" : "password";
        },
        moveToLogin() {
            this.$emit('openlogin')
        },
        validateEmail() {
            // Email validation regex pattern
            const emailPattern = /^\S+@\S+\.\S+$/;
            this.validEmail = emailPattern.test(this.email);
        },
        validateAge() {
            // Check if age is greater than or equal to 16
            this.isAgeValid = parseInt(this.age) >= 16;
        },
        validateForm() {
            this.isGamerTagValid = !!this.gamerTag;
            this.isDiscordAccountValid = !!this.discordAccount;
            this.validateEmail();
            this.isEmailValid = !!this.email && this.validEmail;
            // Password validation regex pattern
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            this.isPasswordValid = !!this.password && passwordPattern.test(this.password);
            this.isConfirmPasswordValid = !!this.confirmPassword && (this.confirmPassword === this.password);
            this.isGenderValid = !!this.gender;
            this.validateAge();
            this.isFavoriteGameValid = !!this.favoriteGame;
            this.isGameUsernameValid = !!this.gameUsername;
            this.isRankValid = !!this.rank;
            // Check if all mandatory fields are valid
            return this.isGamerTagValid && this.isDiscordAccountValid && this.isEmailValid && this.isPasswordValid &&
                this.isConfirmPasswordValid && this.isGenderValid && this.isAgeValid && this.isFavoriteGameValid &&
                this.isGameUsernameValid && this.isRankValid;
        },
        handleSubmit() {
            if (this.validateForm()) {
                // Submit the form data to the database
                // ...
                // Redirect to the home page
                this.isSubmitted = true;
            } else {
                alert('Input is invalid.');
            }
        },
    }

}


</script>
    
<style scoped>
.signupcontainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    max-height: 550px;
    padding: 60px 30px 30px;
    background: #2c394bd7;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
}


.signheading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    background: #ecf0f3;
    width: 220px;
    height: 20px;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    border: none;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

option {
  font-size: 12px;
}

::placeholder {
    font-size: 12px;
}

/* select {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 400;
    height: 35px;
    line-height: 1;
    padding: 6px 12px;
} */

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

.password-container {
    position: relative;
    width: 220px;
    height: fit-content;
}



.file-input-label {
    display: inline-block;
    position: relative;

}

.file-input {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;

}

.file-input-label::after {
    content: url("../assets/upload.svg");
    position: relative;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: #f5f5f5;
    border: 1px solid #d9d9d9;
    border-left: none;
    border-radius: 0 4px 4px 0;
    box-sizing: border-box;
    padding: 5px;
    z-index: 0;
}

.file-input-label:hover::after {
    background-color: #81ecec;
    border: 2px solid #00cec9;
    border-left: none;
    cursor: pointer;
}

.file-input-label:hover input[type="file"] {
    cursor: pointer;
}

.eye {
    position: absolute;
    top: 53%;
    right: 5%;
    width: 18px;
    height: 18px;
    cursor: pointer;
    opacity: 0.8;
}

button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 2px;
    padding: 9px 100px;
    border-radius: 5px;
    width: max-content;
    transition: background-color 0.5s ease;
}

.loginink {
    color: #FF5810;
    text-decoration: none;
}

.loginink:hover {
    text-decoration: underline;
    cursor: pointer;
}

#logo {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: -20px 0 -10px;
}

.title {
    display: flex;
    margin: 0;
    width: 210px;
}


.form-control {
    padding: 15px 0 17px 10px;
    border: 1px solid #F8F8F8;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
}

.optional {
    position: absolute;
    top: 0;
    right: 8px;
    color: rgba(255, 255, 255, 0.5);
}

.error {
    border-color: red;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}

.birth-date {
    display: flex;
    flex-direction: column;
}

.Birthdate {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.matchinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.div7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.mode,
.region {
    padding: 15px 0 17px 10px;
}

.gen {
    display: flex;
    flex-direction: column;
}

.gender {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.parent {
    display: grid;
    /* grid-template-columns: 3fr repeat(4, 1.5fr); */
    grid-template-rows: repeat(5, 0.25fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 2 / 1 / 3 / 2;
}

.div3 {
    grid-area: 3 / 1 / 4 / 2;
}

.div4 {
    grid-area: 4 / 1 / 5 / 2;
}

.div5 {
    grid-area: 1 / 2 / 2 / 4;
}

.div6 {
    grid-area: 2 / 2 / 3 / 4;
}

.div7 {
    grid-area: 3 / 2 / 4 / 4;
}

.div8 {
    grid-area: 4 / 2 / 5 / 4;
}

.div9 {
    grid-area: 1 / 4 / 2 / 6;
}

.div10 {
    grid-area: 2 / 4 / 3 / 6;
}

.div11 {
    grid-area: 3 / 4 / 4 / 6;
}

.div12 {
    grid-area: 4 / 4 / 5 / 5;
}

.div13 {
    grid-area: 4 / 5 / 5 / 6;
}

.div14 {
    grid-area: 5 / 3 / 6 / 4;
}

.div15 {
    grid-area: 5 / 4 / 6 / 6;
}

/* Hide default radio buttons */
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
    width: 0;
    height: 0;
    visibility: hidden;
}

/* Style custom radio buttons */
.checkbox-tools:checked+label,
.checkbox-tools:not(:checked)+label {
    position: relative;
    padding: 8px 10px 3px 10px;
    width: 50px;
    line-height: 5px;
    letter-spacing: 1px;
    margin: 0 auto;
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--white);
    transition: all 300ms linear;
}

.checkbox-tools:not(:checked)+label {
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.checkbox-tools:checked+label {
    background-color: transparent;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.checkbox-tools:not(:checked)+label:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.checkbox-tools:checked+label::before,
.checkbox-tools:not(:checked)+label::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    z-index: -1;
    transition: all 300ms linear;
}



.for-checkbox-tools {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
}

.for-checkbox-tools i {
    font-size: 20px;
    color: var(--white);
}

.for-checkbox-tools img {
    width: 18px;
}</style>