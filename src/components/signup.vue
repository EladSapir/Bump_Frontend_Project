<template>
    <div class="signupcontainer">
        <div class="signheading">
            <img id="logo" src="../assets/logo.png">
            <h1>Let’s Sign Up</h1>
        </div>
        <form>
            <div class="form-group">
                <h3 class="title">Email</h3>
                <input type="email" class="form-control" v-model="email" placeholder="Yourmailhere@something.com" required>
                <span v-if="!validEmail" class="required">Invalid email format</span>
            </div>

            <div class="form-group">
                <h3 class="title">Gamer Tag</h3>
                <input type="text" class="form-control" v-model="gamerTag" placeholder="Enter your gamer tag" required>
            </div>

            <div class="form-group password-container">
                <h3 class="title">Password</h3>
                <input :type="passwordFieldType" class="form-control" v-model="password" placeholder="Notyourtypical123"
                    required>
                <img src="../assets/eye-slash-solid.svg" @click="switchVisibility" class="eye"  v-if="show" id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
                <span v-if="validPassword" class="required">Password must have at least 8 characters, one uppercase letter,
                    one lowercase letter, and one number</span>
            </div>

            <div class="form-group password-container">
                <h3 class="title">Confirm Password</h3>
                <input :type="passwordFieldTypec" class="form-control" v-model="confirmPassword"
                    placeholder="Notyourtypical123" required>
                <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibilityConfirm" v-if="showc" id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibilityConfirm" v-else>
                <span v-if="matchPassword" class="required">Passwords do not match</span>
            </div>

            <div class="form-group">
                <h3 class="title">Discord Account</h3>
                <input type="text" class="form-control" v-model="discordAccount" placeholder="Enter your Discord account"
                    required>
            </div>

           

            



        </form>
        <button type="submit" class="btn" @click.prevent="submitForm">Submit</button>
        <!-- <div id="app"></div>
        <h3 class="title">Gamer Tag</h3>
        <div class="form-group">
            <input type="text" class="form-control" v-model="gamerTag" placeholder="Enter your gamer tag" required>
            <span v-if="!gamerTag" class="required">*</span>
        </div>
        <h3 class="title">Discord Account</h3>
        <div class="form-group">
            <input type="text" class="form-control" v-model="discordAccount" placeholder="Enter your Discord account"
                required>
            <span v-if="!discordAccount" class="required">*</span>
        </div>
        <h3 class="title">Email</h3>
        <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Enter your email" required>
            <span v-if="!email" class="required">*</span>
            <span v-if="!validEmail" class="required">Invalid email format</span>
        </div>
        <h3 class="title">Password</h3>
        <div class="form-group password-container">
            <input :type="passwordFieldType" class="form-control" v-model="password" placeholder="Enter your password"
                required>
            <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibility" v-if="show" id="eyeslash">
            <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
            <span v-if="!password" class="required">*</span>
            <span v-if="!validPassword" class="required">Password must have at least 8 characters, one uppercase letter, one
                lowercase letter, and one number</span>
        </div>
        <h3 class="title">Confirm Password</h3>
        <div class="form-group password-container">
            <input :type="passwordFieldType" class="form-control" v-model="confirmPassword"
                placeholder="Confirm your password" required>
            <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibility" v-if="show" id="eyeslash">
            <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
            <span v-if="!confirmPassword" class="required">*</span>
            <span v-if="!matchPassword" class="required">Passwords do not match</span>
        </div>
        <h3 class="title">Gender</h3>
        <div class="form-group">
            <select class="form-control" v-model="gender" required>
                <option value="">Select your gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
            </select>
            <span v-if="!gender" class="required">*</span>
        </div>
        <h3 class="title">Age</h3>
        <div class="form-group">
            <input type="number" class="form-control" v-model="age" placeholder="Enter your age" required>
            <span v-if="!age" class="required">*</span>
            <span v-if="!validAge" class="required">You must be at least 16 years old</span>
        </div>
        <h3 class="title">Favorite Game</h3>
        <div class="form-group">
            <select class="form-control" v-model="favoriteGame" required>
                <option value="">Select your favorite game</option>
                <option value="Rocket League">Rocket League</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Valorant">Valorant</option>
            </select>
            <span v-if="!favoriteGame" class="required">*</span>
        </div>

        <div class="form-group">
    <h3 class="title">Username in the Game</h3>
    <input type="text" class="form-control" v-model="gamerTag" placeholder="Enter your gamer tag" required>
    <span v-if="!gamerTag" class="required">*</span>
  </div>


  <div class="form-group">
    <h3 class="title">Rank</h3>
    <select class="form-control" v-model="rank" required>
      <option value="">Select your rank</option>
      <optgroup label="League of Legends">
        <option value="Unranked">Unranked</option>
        <option value="Iron">Iron</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
        <option value="Challenger">Challenger</option>
      </optgroup>
      <optgroup label="Valorant">
        <option value="Unranked">Unranked</option>
        <option value="Iron">Iron</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
        <option value="Immortal">Immortal</option>
      </optgroup>
      <optgroup label="Rocket League">
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
        <option value="Champion">Champion</option>
        <option value="Grand Champion">Grand Champion</option>
        <option value="Supersonic Legend (SSL)">Supersonic Legend (SSL)</option>
      </optgroup>
    </select>
  </div>


  <div class="form-group">
    <h3 class="title">State</h3>
    <input type="text" class="form-control" v-model="state">
  </div>

 
  <div class="form-group">
    <h3 class="title">Language</h3>
    <input type="text" class="form-control" v-model="language" placeholder="Enter your preferred language" required>
    <span v-if="!language" class="required">*</span>
  </div>


  <div class="form-group">
    <h3 class="title">Profile Photo</h3>
    <input type="file" accept="image/*" @change="onFileSelected">
  </div>


  


  <p class="error-msg" v-if="error">{{ error }}</p>


    </form> -->
        <p>already registered? <a class="loginink" @click="moveToLogin">Login here.</a></p>
    </div>
</template>
    
    
      
<script>
export default {
    name: 'login',
    data() {
        return {
            gamerTag: '',
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
    },switchVisibilityConfirm() {
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
form {
    display: grid;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

input {
    background: #ecf0f3;
    margin: 5px 0px 5px 0px;
    height: 20px;
    width: 222.5px;
    font-size: 14px;
    border-radius: 15px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.signheading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.password-container {
    position: relative;
    width: 315px;
}

.eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 53%;
    right: 4%;
    cursor: pointer;
    opacity: 0.8;
}



button[type="submit"] {
    margin-top: 5px;
    margin-bottom: 2px;
    padding: 9px 137px;
    border-radius: 5px;
    width: max-content;
    transition: background-color 0.5s ease;
}

p {
    color: white;
}

.signupcontainer {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 1100px;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 30px 30px 30px;
    background: #2c394bd7;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

}


.loginink {
    color: #FF5810;
    text-decoration: none;
}

.loginink:hover {
    color: #FF5810;
    text-decoration: underline;
    cursor: pointer;
}

#logo {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: -20px;
    margin-bottom: -10px;
}


.title {
    margin: 0;
}

.form-group {
    position: relative;
    margin: 45px 15px;

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
    right:8px;
    top: 0;
    color: rgba(255, 255, 255, 0.5);
}

.error {
    border-color: red;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}</style>