<template>
    <div class="signupcontainer">
        <div>
            <img v-if="!returnmouseover" id="return" src="../assets/backarrow.svg" @click="moveToLogin"
                @mouseover="returnmouseover = !returnmouseover">
            <img v-else id="return" src="../assets/returnorange.svg" @click="moveToLogin"
                @mouseout="returnmouseover = !returnmouseover">
        </div>
        <div class="signheading">
            <img id="logo" src="../../public/Logo1.svg">
            <h1>Let’s Sign Up</h1>
        </div>
        <form class="parent" @submit.prevent="handleSubmit">
            <div class="form-group div1">
                <h3 class="title">Email</h3>
                <input :class="{ error: !isEmailValid }" name="email" type="email" class="form-control" v-model="email"
                    placeholder="Yourmailhere@something.com" required>
            </div>


            <div class="form-group password-container div2">
                <h3 class="title">Password</h3>
                <input :class="{ error: !isPasswordValid }" :type="passwordFieldType" name="password" class="form-control"
                    v-model="password" placeholder="Notyourtypical123" required>
                <img src="../assets/eye-slash-solid.svg" @click="switchVisibility" class="eye" v-if="show" id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibility" v-else>
            </div>


            <div class="form-group password-container div3">
                <h3 class="title">Confirm Password</h3>
                <input :class="{ error: !isConfirmPasswordValid }" name="password" :type="passwordFieldTypec"
                    class="form-control" v-model="confirmPassword" placeholder="Notyourtypical123" required>
                <img src="../assets/eye-slash-solid.svg" class="eye" @click="switchVisibilityConfirm" v-if="showc"
                    id="eyeslash">
                <img src="../assets/eye-solid.svg" class="eye" id="eye" @click="switchVisibilityConfirm" v-else>
            </div>

            <div class="form-group div4">
                <h3 class="title">Discord Account</h3>
                <input type="text" class="form-control" v-model="discordAccount" placeholder="Thebestgamer#1234" required>
            </div>

            <div class="form-group div9">
                <h3 class="title">Gamer Tag</h3>
                <input type="text" class="form-control" v-model="gamerTag" placeholder="Thebestgamer1234" required>
            </div>
            <div class="form-group di10">
                <h3 class="title">Favorite Game</h3>
                <select :class="{ firstoption: !favoritegame }" class="form-control" v-model="favoritegame" required>
                    <option disabled selected value="">Choose game here</option>
                    <option value="Rocket League">Rocket League</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="Valorant">Valorant</option>
                </select>
            </div>
            <div class="form-group div11">
                <h3 class="title">Match info</h3>
                <div class="matchinfo">
                    <select v-if="!(favoritegame === 'Valorant')" :class="{ firstoption: !region }"
                        class="form-control region" v-model="region" required>
                        <option value="" disabled selected>Region</option>
                        <option v-if="favoritegame === 'Rocket League'" value="America">America</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Europe">Europe</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Oceania">Oceania</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Middle East">Middle East</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Africa">Africa</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Asia">Asia</option>
                        <option v-if="favoritegame === 'League of Legends'" value="North America">North America</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Europe West">Europe West</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Europe Nordic & East">Europe Nordic &
                            East</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Brazil">Brazil</option>
                    </select>
                    <select v-if="(favoritegame === 'Valorant')" :class="{ firstoption: !server }"
                        class="form-control server" v-model="server" required>
                        <option value="" disabled selected>Server</option>
                        <option value="Brazil">Brazil</option>
                        <option value="North America">North America</option>
                        <option value="LATAM">LATAM</option>
                        <option value="Asia-Pacific">Asia-Pacific</option>
                        <option value="Europe">Europe</option>
                        <option value="Korea">Korea</option>
                    </select>
                    <select v-if="!(favoritegame === 'Valorant')" :class="{ firstoption: !mode }"
                        class="form-control mode last" v-model="mode" required>
                        <option value="" disabled selected>Mode</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Ranked - Solo">Ranked - Solo</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Ranked - Duo">Ranked - Duo</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Ranked - Trio">Ranked - Trio</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Unranked - Solo">Unranked - Solo</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Unranked - Duo">Unranked - Duo</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Unranked - Trio">Unranked - Trio</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Unranked - Quad">Unranked - Quad</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Normal">Normal</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Draft">Draft</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Duo">Duo</option>
                        <option v-if="favoritegame === 'League of Legends'" value="ARAM">ARAM</option>

                    </select>
                </div>
            </div>

            <div class="form-group div12">
                <h3 class="title">Player Info</h3>

                <div class="playreinfo">

                    <select v-if="!(favoritegame === 'Rocket League')" :class="{ firstoption: !role }"
                        class="form-control role" v-model="role" required>
                        <option value="" disabled selected>Role</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Top">Top</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Mid">Mid</option>
                        <option v-if="favoritegame === 'League of Legends'" value="ADC">ADC</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Support">Support</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Jungle">Jungle</option>
                        <option v-if="favoritegame === 'Valorant'" value="Duelist">Duelist</option>
                        <option v-if="favoritegame === 'Valorant'" value="Initiator">Initiator</option>
                        <option v-if="favoritegame === 'Valorant'" value="Sentinel">Sentinel</option>
                        <option v-if="favoritegame === 'Valorant'" value="Controller">Controller</option>

                    </select>

                    <select :class="[{ firstoption: !rank }, { rank: !(favoritegame === 'Rocket League') }]"
                        class="form-control last" v-model="rank" required>
                        <option value="" disabled selected>Rank</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Unranked">Unranked</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Iron">Iron</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Bronze">Bronze</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Silver">Silver</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Gold">Gold</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Platinum">Platinum</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Diamond">Diamond</option>
                        <option v-if="favoritegame === 'League of Legends'" value="Challenger">Challenger</option>
                        <option v-if="favoritegame === 'Valorant'" value="Unranked">Unranked</option>
                        <option v-if="favoritegame === 'Valorant'" value="Iron">Iron</option>
                        <option v-if="favoritegame === 'Valorant'" value="Bronze">Bronze</option>
                        <option v-if="favoritegame === 'Valorant'" value="Silver">Silver</option>
                        <option v-if="favoritegame === 'Valorant'" value="Gold">Gold</option>
                        <option v-if="favoritegame === 'Valorant'" value="Platinum">Platinum</option>
                        <option v-if="favoritegame === 'Valorant'" value="Diamond">Diamond</option>
                        <option v-if="favoritegame === 'Valorant'" value="Immortal">Immortal</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Bronze">Bronze</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Silver">Silver</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Gold">Gold</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Platinum">Platinum</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Diamond">Diamond</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Champion">Champion</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Grand Champion">Grand Champion</option>
                        <option v-if="favoritegame === 'Rocket League'" value="Supersonic Legend (SSL)">Supersonic Legend
                            (SSL)
                        </option>

                    </select>
                </div>
            </div>

            <div class="birth-date div5">
                <h3 class="title">Birth date</h3>
                <div class="form-group Birthdate">
                    <select :class="[{ firstoption: !day }, { error: !isAgeValid }]" class="form-control birth"
                        v-model="day" required>
                        <option value="">Day</option>
                        <option v-for="i in 31" :value="i" :key="i">{{ i }}</option>
                    </select>
                    <select :class="{ firstoption: !month, error: !isAgeValid }" class="form-contro birth" v-model="month"
                        required>
                        <option value="">Month</option>
                        <option v-for="i in 12" :value="i" :key="i">{{ i }}</option>
                    </select>
                    <select :class="{ firstoption: !year, error: !isAgeValid }" class="form-control last birth"
                        v-model="year" required>
                        <option value="">Year</option>
                        <option v-for="i in 120" :value="(new Date()).getFullYear() - i" :key="i">{{ (new
                            Date()).getFullYear() - i }}</option>
                    </select>
                </div>
            </div>



            <div class="gen div6">
                <h3 class="title">Gender</h3>
                <div class="form-group gender">
                    <div class="male">
                        <input class="checkbox-tools" type="radio" v-model="gender" name="tools" value="male" id="tool-1"
                            checked>
                        <label class="for-checkbox-tools" for="tool-1" @mouseover="malemouseover = true"
                            @mouseout="malemouseover = false">
                            <img v-if="gender === 'male' || malemouseover" src="../assets/malewhite.svg"
                                style="width: 25px;">
                            <img v-else src="../assets/male.svg">
                        </label>
                    </div>
                    <div class="female ">
                        <input class="checkbox-tools" type="radio" v-model="gender" value="female" name="tools" id="tool-2">
                        <label class="for-checkbox-tools " for="tool-2" @mouseover="femalemouseover = true"
                            @mouseout="femalemouseover = false">
                            <img v-if="gender === 'female' || femalemouseover" src="../assets/femalewhite.svg"
                                style="width: 25px;">
                            <img v-else src="../assets/female.svg" style="width: 12px;">
                        </label>
                    </div>
                    <div class="transgender">
                        <input class="checkbox-tools" type="radio" v-model="gender" value="transgender" name="tools"
                            id="tool-3">
                        <label class="for-checkbox-tools" for="tool-3" @mouseover="transgendermouseover = true"
                            @mouseout="transgendermouseover = false">
                            <img v-if="gender === 'transgender' || transgendermouseover"
                                src="../assets/transgenderwhite.svg" style="width: 20px;">
                            <img v-else src="../assets/transgender.svg">
                        </label>
                    </div>
                </div>
            </div>



            <div class="form-group div7">
                <div class="file-upload-form">
                    <div class="optional">
                        <h3 class="title">Upload Image</h3>
                        <span>*optional</span>
                        <span class="deleteimg" v-if="Upload_profile_image != 'Upload profile image'"
                            @click="deleteiamge">Press here to clear the image</span>
                    </div>
                    <label class="file-input-label" @mouseover="uploadhover = false" @mouseout="uploadhover = true">
                        <div class="upload-icon">
                            <p :class="{ changeimg: changeimage }">{{ Upload_profile_image
                            }}</p>
                            <img v-if="!uploadhover || !(Upload_profile_image === 'Upload profile image')"
                                src="../assets/uploadhover.svg">
                            <img v-else src="../assets/upload.svg">
                        </div>
                        <input id="file-input" class="file-input" type="file" accept="image/*" @change="handleImageChange">
                    </label>
                </div>
            </div>

            <div class="div8">
                <div class="form-group">
                    <div class="optional">
                        <h3 class="title count">Country</h3>
                        <span>*optional</span>
                    </div>
                    <select class="form-control country " :class="{ firstoption: state === ' ' }" v-model="state">
                        <option value=" " disabled selected>Select a country</option>
                        <option value="Israel">Israel</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="India">India</option>
                    </select>
                </div>

                <div class="form-group">
                    <div class="optional">

                        <h3 class="title lang">Language</h3>
                        <span>*optional</span>
                    </div>
                    <select class="form-control language last" :class="{ firstoption: language === ' ' }"
                        v-model="language">
                        <option value=" " disabled selected>Select a language</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>



            <span v-if="error" class="required" v-html="error"></span>
            <div class="div13">
                <p class="clearbtn" @click="clear">Clear</p>
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>

        <loading v-if="isloading" />


    </div>
</template>
    
    
      
<script>
import axios from 'axios';
import loading from './loading.vue'
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dk9nwmeth/upload'
var CLOUDINARY_UPLOAD_PRESET = 'auhzhahq'

export default {
    name: 'login',
    components: {
        loading
    },
    data() {
        return {
            isloading: false,
            uploadhover: true,
            transgendermouseover: false,
            femalemouseover: false,
            malemouseover: false,
            returnmouseover: false,
            gamerTag: '',
            imageData: "",
            imageURL: 'https://res.cloudinary.com/dk9nwmeth/image/upload/v1684156458/Profile_Pic_Default_tgudip.png',
            discordAccount: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: 'transgender',
            day: '',
            month: '',
            year: '',
            favoritegame: '',
            gameUsername: '',
            role: '',
            region: '',
            server: '',
            rank: '',
            mode: '',
            state: ' ',
            language: ' ',
            Upload_profile_image: 'Upload profile image',
            isSubmitted: false,
            isEmailValid: true,
            isPasswordValid: true,
            isConfirmPasswordValid: true,
            isAgeValid: true,
            show: true,
            passwordFieldType: "password",
            showc: true,
            passwordFieldTypec: "password",
            changeimage: false,
            error: '',
        }
    },
    methods: {
        /*clear all the fields*/
        clear() {
            this.error = '';
            this.changeimage = false;
            this.gamerTag = '';
            this.discordAccount = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.language = ' ';
            this.state = ' ';
            this.rank = '';
            this.year = '';
            this.month = '';
            this.day = '';
            this.role = '';
            this.region = '';
            this.server = '';
            this.mode = '';
            this.matchinfo = '';
            this.favoritegame = '';
            this.gender = 'transgender';
            this.imageData = ' ';
            this.Upload_profile_image = 'Upload profile image';
            this.isAgeValid = true;
            this.isConfirmPasswordValid = true;
            this.isPasswordValid = true;
            this.imageURL = 'https://res.cloudinary.com/dk9nwmeth/image/upload/v1684156458/Profile_Pic_Default_tgudip.png'
        },
        handleImageChange(event) {
            this.imageData = document.querySelector('input[type="file"]');
            const file = this.imageData.files[0];
            const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
            if (file && file.size <= maxSizeInBytes) {
                this.changeimage = true;

                if (file) {
                    this.Upload_profile_image = file.name;
                }
            }
            else {
                // File exceeds size limit
                alert('The selected file exceeds the maximum allowed size.');
                // Reset input value to clear the selection
                event.target.value = '';
            }
        },
        deleteiamge() {
            this.imageData = "";
            this.Upload_profile_image = "Upload profile image";
            this.changeimage = false;
            this.imageURL = 'https://res.cloudinary.com/dk9nwmeth/image/upload/v1684156458/Profile_Pic_Default_tgudip.png'
        },
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
            this.isEmailValid = emailPattern.test(this.email);
            if (!this.isEmailValid) {
                console.log("invalid email");
            }
            else {
                console.log("valid email");
            }
        },
        validateAge() {
            // Check if age is greater than or equal to 16
            const currentDate = new Date();
            const birthDate = new Date(this.year, this.month - 1, this.day);
            const ageInMilliseconds = currentDate - birthDate;
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // approximate number of days in a year

            this.isAgeValid = ageInYears >= 16;
            if (!this.isAgeValid) {
                console.log("invalid age");
            }
            else {
                console.log("valid age");
            }
        },
        builderror() {
            console.log("build error:" + this.error);
            if (!this.isPasswordValid && this.isConfirmPasswordValid && this.isAgeValid) {
                this.error = "Please enter a valid password"
            }
            else if (this.isPasswordValid && !this.isConfirmPasswordValid && this.isAgeValid) {
                this.error = "Passwords do not match"
            }
            else if (this.isPasswordValid && this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Please enter a valid age"
            }
            else if (!this.isPasswordValid && !this.isConfirmPasswordValid && this.isAgeValid) {
                this.error = "Please enter a valid password and confirm password"
            }
            else if (!this.isPasswordValid && this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Please enter a valid password and age"
            }
            else if (this.isPasswordValid && !this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Passwords do not match and enter a valid age"
            }
            else if (!this.isPasswordValid && !this.isConfirmPasswordValid && this.isAgeValid) {
                this.error = "Please enter a valid password and confirm password"
            }
            else if (!this.isPasswordValid && this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Please enter a valid password and age"
            }
            else if (this.isPasswordValid && !this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Please confirm password and age"
            }
            else if (!this.isPasswordValid && !this.isConfirmPasswordValid && !this.isAgeValid) {
                this.error = "Please enter a valid password, confirm password and age"
            }

            if (!this.isPasswordValid) {
                this.error = this.error + "<br>• Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number"
            }
            if (!this.isAgeValid) {
                this.error = this.error + "<br>• You must be at least 16 years old"
            }
        },
        validateForm() {
            this.validateEmail();
            // Password validation regex pattern
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            this.isPasswordValid = passwordPattern.test(this.password);
            this.isConfirmPasswordValid = (this.confirmPassword === this.password);
            this.validateAge();
            return this.isEmailValid && this.isPasswordValid &&
                this.isConfirmPasswordValid && this.isAgeValid;
        },
        handleSubmit() {
            console.log("submit");
            this.isLoading = true;
            if (this.validateForm()) {
                // Submit the form data to the database
                this.submitForm(),
                    this.isSubmitted = true;
            } else {
                this.builderror();
            }
        },
        async uploadFile() {
            const fileInput = this.imageData;
            const file = fileInput.files[0];

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

            try {
                const response = await axios({
                    url: CLOUDINARY_URL,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: formData
                });
                return response.data.secure_url;
            } catch (err) {
                console.error(err);
            }

        },
        async submitForm() {

            try {
                this.error = '';
                if (this.changeimage) {
                    console.log("uploading image");
                    this.imageURL = await this.uploadFile();
                }
                console.log(this.imageURL);
                let g = this.favoritegame;
                let g1;
                let g2;
                let g3;
                let g4;
                let g5;
                switch (g) {
                    case "Rocket League":
                        g1 = '1';
                        g2 = this.region;
                        g3 = this.mode;
                        g4 = this.rank;
                        g5 = null;
                        break;
                    case "League of Legends":
                        g1 = '0';
                        g2 = this.region;
                        g3 = this.mode;
                        g4 = this.role;
                        g5 = this.rank;
                        break;
                    case "Valorant":
                        g1 = '2';
                        g2 = this.server;
                        g3 = this.rank;
                        g4 = this.role;
                        g5 = null;
                        break;
                }
                if (this.month < 10) {
                    var month2 = '0' + this.month;
                }
                else {
                    var month2 = this.month;
                }
                if (this.day < 10) {
                    var day2 = '0' + this.day;
                }
                else {
                    var day2 = this.day;
                }
                console.log('before post request')
                const response = await axios.post('https://backend-project-vzn7.onrender.com/register', {

                    "email": this.email,
                    "gamertag": this.gamerTag,
                    "password": this.password,
                    "gender": this.gender,
                    "dob": this.year + "-" + month2 + "-" + day2 + "T00:00:00.000Z",
                    "g1": g1,
                    "g2": g2,
                    "g3": g3,
                    "g4": g4,
                    "g5": g5,
                    "discord": this.discordAccount,
                    "language": this.language,
                    "country": this.state,
                    "picture": this.imageURL,
                });

                // Extract the user ID from the response
                const userId = response.data;
                console.log(userId);
                if (userId === 'email already exists') {
                    this.isLoading = false;

                    this.error = "Email already exists";
                }
                else if (userId === 'gamerTag exists') {
                    this.isLoading = false;

                    this.error = "Gamer tag already exists";
                }
                else {
                    // Redirect to the homepage
                    this.$router.push({ name: 'homepage', query: { id: userId.id } });
                }

            } catch (error) {
                console.error(error);
                // Handle the error (e.g., show an error message)
            }
        }
    }

}


</script>
    
<style scoped>
.signupcontainer {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 60px;
    background: var(--LLS);
    border: 1px solid var(--stroke);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}

#return {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin: 20px;
    cursor: pointer;
}

input {
    width: 415px;
    height: 45px;
}

.signheading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;
}


.firstoption {
    color: var(--textinput)
}

.firstoption option {
    color: var(--black)
}


.password-container {
    position: relative;
}

.eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 45px;
    right: 15px;
    cursor: pointer;
    opacity: 0.8;
}

button[type="submit"] {
    padding: 10px 80px;
}

#logo {
    border-radius: 50%;
    width: 70px;
    height: 70px;
}

.title {
    margin-bottom: 5px;
}

.file-upload-form {
    display: flex;
    flex-direction: column;
}

.file-input-label {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    background-color: var(--white);
    height: 45px;
    border-radius: 15px;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 430px;
    border: none;
    cursor: pointer;
}

.file-input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
    cursor: pointer;

}

.upload-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    cursor: pointer;

}

.upload-icon img {
    position: absolute;
    right: 15px;
    width: 25px;
    cursor: pointer;
    height: 25px;
}

.upload-icon p {
    cursor: pointer;
    color: var(--textinput);
}

.upload-icon .changeimg {
    color: var(--black);
}

.optional {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.optional span {
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.5)
}

.deleteimg {
    margin-left: 35px !important;
    color: var(--textinput);
}

.deleteimg:hover {
    color: var(--hovercolor);
    cursor: pointer;
    text-decoration: underline;
}

.error {
    border: 2px solid red;
}

.required {
    color: rgb(230, 91, 91);
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

.title {
    width: fit-content;
}

.birth {
    margin-right: 10px;
    width: 136.66667px;
}


.matchinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.div12 {
    display: flex;
    flex-direction: column;
}

.playreinfo {
    display: flex;
    flex-direction: row;
}

.div11 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.div8 {
    display: flex;
    flex-direction: row;
    align-items: center;
}


.count,
.lang {
    width: fit-content;
}

.role,
.rank,
.country,
.language,
.mode,
.region {
    width: 210px;
    margin-right: 10px;

}




.parent {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(5, 0.5fr);
    grid-column-gap: 20px;
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
    grid-area: 1 / 2 / 2 / 3;
}

.div6 {
    grid-area: 2 / 2 / 3 / 3;
}

.div7 {
    grid-area: 3 / 2 / 4 / 3;
}

.div8 {
    grid-area: 4 / 2 / 5 / 3;
}

.div9 {
    grid-area: 1 / 3 / 2 / 4;
}

.div10 {
    grid-area: 2 / 3 / 3 / 4;
}

.div11 {
    grid-area: 3 / 3 / 4 / 4;
}

.div12 {
    grid-area: 4 / 3 / 5 / 4;
}

.div13 {
    grid-area: 5 / 3 / 6 / 4;
}

.gen {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.gender {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 136.66667px;
    height: 45px;
    text-align: center;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: all 300ms linear;
    margin-right: 10px;
}

.checkbox-tools:not(:checked)+label {
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.checkbox-tools:not(:checked)+label:hover {
    background-color: var(--hovercolor);
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

.div13 {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
}

.for-checkbox-tools {
    display: flex;
    justify-content: center;
    align-items: center;
}



.for-checkbox-tools img {
    width: 18px;
}

.clearbtn {
    cursor: pointer;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    margin-right: 10px;
}

.clearbtn:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);
    text-decoration-thickness: 2px;
}

.last {
    margin-right: 0px;
}
</style>