<template>
    <div class="profile">
        <navbar />
        <div class="user-profile">
            <div class="profile-picture">
                <img :src="require('../assets/' + profilePicture + '.png')" alt="Profile Picture" />
            </div>
            <div class="user-info">
                <h2 class="username">{{ username }}</h2>
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
                <div class="navigation-item" :class="{chosen: issaveddialog}">
                    <span class="navigation-icon">Saved</span>
                    <!-- Add icon for saved here -->
                </div>
                <div class="navigation-item" :class="{chosen: islikeddialog}">
                    <span class="navigation-icon">Liked</span>
                    <!-- Add icon for liked here -->
                </div>
                <div class="navigation-item" :class="{chosen: isstatsdialog}">
                    <span class="navigation-icon">Stats</span>
                    <!-- Add icon for stats here -->
                </div>
            </div>
            <div class="profile-actions">
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
    data() {
        return {
            profilePicture: "yossi_image",
            posts: [],
            userId: '',
            username: 'YossiTheKing',
            edithover: false,
            ispostdialog: true,
            issaveddialog: false,
            islikeddialog: false,
            isstatsdialog: false,
        };
    },
    created() {
        this.userId = this.$route.query.id;
        console.log('homepage:' + this.userId);
        // Example of manually setting posts
        this.posts = [
            {
                id: 1,
                profilePicture: 'yossi_image',
                username: 'YossiTheKing',
                time: '20:30',
                date: '20/10/2020',
                text: "🎮🔥 Let the Games Begin! Join the Ultimate Gaming Adventure! 🔥🎮🌟 Calling all gamers and virtual warriors! 🌟 Get ready to embark on an unforgettable gaming journey as we dive into the realm of excitement and entertainment. 🎉 Whether you're a casual player or a hardcore enthusiast, we've got something epic in store for you!🔥 Brace yourself for heart-pounding action, mind-bending puzzles, and breathtaking visuals that will transport you to another world. Immerse yourself in immersive narratives and become the hero of your own epic saga. 🌍 Are you ready to conquer new realms and save the day?",
                photo: 'post1',
                bump: 10,
                share: 5,
                comments: [
                    {
                        username: 'ToTheTomer',
                        profilePicture: 'tomer_image',
                        comment: 'Ready to level up and conquer the virtual world!'
                    },
                    {
                        username: 'YossiTheKing',
                        profilePicture: 'yossi_image',
                        comment: 'Gaming is my escape from reality. Let the adventure begin!'
                    },
                    {
                        username: 'SolTheSolal',
                        profilePicture: 'solal_image',
                        comment: 'Playing games brings out the inner child in me. So much fun!'
                    },
                    {
                        username: 'ToTheTomer',
                        profilePicture: 'tomer_image',
                        comment: 'Game on! Time to immerse myself in another fantastic gaming experience!'
                    }
                ],
            },
            {
                id: 2,
                profilePicture: 'yossi_image',
                username: 'YossiTheKing',
                time: '21:30',
                date: '21/10/2020',
                text: '🕹️ Dive into the latest releases, from pulse-pounding first-person shooters to captivating role-playing adventures. 🏹 Take on the challenge of online battles and prove your skills against fellow gamers from around the globe. Engage in fierce competitions, team up with friends, and celebrate victories together!',
                photo: '',
                bump: 10,
                share: 5,
                comments: [
                    {
                        username: 'YossiTheKing',
                        profilePicture: 'yossi_image',
                        comment: "🎉🎉 This game is going to be epic! Can't wait to get my hands on it!"
                    },
                    {
                        username: 'SolTheSolal',
                        profilePicture: 'solal_image',
                        comment: "I've been counting down the days for this release. It's finally here!"
                    },
                    {
                        username: 'ToTheTomer',
                        profilePicture: 'tomer_image',
                        comment: 'Just finished playing this game, and it exceeded all my expectations. Absolutely mind-blowing!'
                    },
                ]
            },
        ];
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
    height: 100%;
    width: 100vw;
    margin-top: 80px;
    padding-bottom: 30px;
}

.user-profile {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px;
    padding-top:10px;
    background-color: #1B1E29;
    border: 1px solid var(--stroke);
    z-index: 1;
}

.profile-picture img {

    border-radius: 50%;
    border: 3px solid var(--main);
    width: 80px;
    height: 80px;
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
  
  