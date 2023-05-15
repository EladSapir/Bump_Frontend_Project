<template>
    <div class="profile">
        <navbar />
        <div class="user-profile">
            <div class="profile-picture">
                <img :src="require('../assets/' + profilePicture + '.png')" alt="Profile Picture" />
            </div>
            <div class="user-info">
                <h2 class="username">{{ username }} <Button v-if="!myprofile" class="btn">Follow</Button></h2>
                <div class="user-stats">
                    <div class="following">
                        <span>Following</span>
                        <p>5656</p>

                    </div>
                    <div class="followers">
                        <span>Followers</span>
                        <p>45</p>

                    </div>
                </div>
            </div>
            <div class="profile-navigation">
                <div class="navigation-item" :class="{chosen: ispostdialog}">
                    <span class="navigation-icon" >Posts</span>
                    <!-- Add icon for posts here -->
                </div>
                <div v-if="myprofile" class="navigation-item" :class="{chosen: issaveddialog}">
                    <span class="navigation-icon">Saved</span>
                    <!-- Add icon for saved here -->
                </div>
                <div v-if="myprofile" class="navigation-item" :class="{chosen: islikeddialog}">
                    <span class="navigation-icon">Liked</span>
                    <!-- Add icon for liked here -->
                </div>
                <div v-if="myprofile" class="navigation-item" :class="{chosen: isstatsdialog}">
                    <span class="navigation-icon">Stats</span>
                    <!-- Add icon for stats here -->
                </div>
            </div>
            <div v-if="myprofile"  class="profile-actions">
                <img v-if="!edithover" src="../assets/edit_square.svg" alt="edit profile" @mouseenter="edithover=true">
                <img v-else src="../assets/edit_square_hover.svg" alt="edit profile" @mouseleave="edithover=false">

            </div>
        </div>
        <div class="myposts" v-if="ispostdialog">
            <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="profilePicture" />
        </div>
    </div>
</template>
  
    
<script>

import createpost from '../components/createpost.vue';
import navbar from "../components/navbar.vue";
import post from '../components/post.vue';

export default {
    name: "profile",
    components: {
        navbar,
        createpost,
        post
    },
    props:['userId','differentUserId'],
    data() {
        return {
            profilePicture: "yossi_image",
            posts: [],
            username: 'YossiTheKing',
            edithover: false,
            ispostdialog: true,
            issaveddialog: false,
            islikeddialog: false,
            isstatsdialog: false,
            myprofile:false,
        };
    },
    created() {
        console.log('userId:'+this.userId);
        console.log('differentUserId:'+this.differentUserId);
        if(this.differentUserId===this.userId){
           this.myprofile=true;
           console.log("same user");
        }
        else{
            console.log("different user");
        }
       
    },

};
</script>
    
<style scoped>
html {
    background-image: none !important;

}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--pagebgcolor);
    height: 100vh;
    width: 100vw;
    margin-top: 80px;
    padding-bottom: 30px;
}

.user-profile {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 25px;
    padding-top:25px;
    background-color: #1B1E29;
    border: 1px solid var(--stroke);
    z-index: 1;
}

.profile-picture img {

    border-radius: 50%;
    border: 3px solid var(--main);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: var(--profile-picture-color);
}

.profile-picture {
    margin-left: 100px;
    margin-right: 15px;
}

.user-info {
    margin-left: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
}
.btn{
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 10px;
}

.username {
    color: #fff;
    font-weight: 500;
    font-size: 28px;
    margin:0;
    margin-left:10px;
}

.user-stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
   
}

.following,
.followers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
}
.user-stats>div {
    margin-right: 20px;
}

.user-stats p {
    color: #fff;
    background-color:none;
    padding: 5px 0;
    width: 80px;
    border-radius: 20px;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
    border: 3px solid #ffffff75;
    border-radius: 15px;
}

.user-stats span {
    color: #fff;
    font-size: 14px;
}

.profile-actions {
   position: absolute;
    right: 40px;
    top: 20px;
}

.profile-actions img {
  
    margin-left: 10px;
    cursor: pointer;
}

.profile-navigation {
    position: absolute;
    bottom: -33px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.navigation-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
}

.navigation-item span {
    background-color: #1B1E29;
    border: 2px solid var(--white);
    padding: 5px 15px;
    border-radius: 12px;
    text-align: center;
    color:var(--white);
}

.navigation-item :hover {
    background-color: var(--hovercolor);
}

.chosen span{
    background-color: var(--main);
}
.navigation-icon {
    font-size: 16px;
    margin-top: 5px;
    opacity: 0.8;
}
.myposts{
    margin-top:180px
}
</style>
  
  