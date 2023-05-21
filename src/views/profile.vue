<template>
    <div class="profile">
        <navbar />
        <div class="user-profile">
            <div class="profile-picture">
                <img :src="profilePicture" alt="Profile Picture" />
            </div>
            <div class="user-info">
                <h2 class="username">{{ GamerTag }} <button v-if="!myprofile" class="btn" @click="follow">Follow</button>
                </h2>
                <div class="user-stats">
                    <div class="following">
                        <span>Following</span>
                        <p>{{ numfollowing.length }}</p>

                    </div>
                    <div class="followers">
                        <span>Followers</span>
                        <p>{{ numfollowers.length }}</p>

                    </div>

                </div>
            </div>
            <div class="profile-navigation">
                <div class="navigation-item" @click="choosedialog(1)" :class="{ chosen: ispostdialog }">
                    <span class="navigation-icon">Posts</span>
                    <!-- Add icon for posts here -->
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(2)" :class="{ chosen: issaveddialog }">
                    <span class="navigation-icon">Saved</span>
                    <!-- Add icon for saved here -->
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(3)" :class="{ chosen: islikeddialog }">
                    <span class="navigation-icon">Liked</span>
                    <!-- Add icon for liked here -->
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(4)" :class="{ chosen: isstatsdialog }">
                    <span class="navigation-icon">Stats</span>
                    <!-- Add icon for stats here -->
                </div>
            </div>
            <div v-if="myprofile" class="profile-actions">
                <img v-if="!edithover" src="../assets/edit_square.svg" alt="edit profile" @mouseenter="edithover = true">
                <img v-else src="../assets/edit_square_hover.svg" alt="edit profile" @mouseout="edithover = false">

            </div>
        </div>
        <div class="myposts" v-if="ispostdialog">
            <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="user.Picture"
                :GamerTag="GamerTag" />
            <emptymessage v-if="!posts"
                emptymessage="Looks like you haven't created any posts yet. Why not share your thoughts and ideas with the community?" />
        </div>
        <div class="myposts" v-if="issaveddialog">
            <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="user.Picture"
                :GamerTag="GamerTag" />
            <emptymessage v-if="!posts"
                emptymessage="You haven't saved any posts yet. Keep an eye out for interesting content to save for later!" />

        </div>
        <div class="myposts" v-if="islikeddialog">
            <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="user.Picture"
                :GamerTag="GamerTag" />
            <emptymessage v-if="!posts"
                emptymessage="You haven't liked any posts yet. Discover new content and show your appreciation by giving posts a 'like'!" />

        </div>
        <div class="myposts" v-if="isstatsdialog">
            <stats/>
        </div>
    </div>
</template>
  
    
<script>

import createpost from '../components/createpost.vue';
import navbar from "../components/navbar.vue";
import post from '../components/post.vue';
import axios from 'axios';
import emptymessage from '../components/emptymessage'
import stats from '../components/stats.vue'

export default {
    name: "profile",
    components: {
        navbar,
        createpost,
        post,
        emptymessage,
        stats

    },
    props: ['differentUserId'],
    data() {
        return {
            profilePicture: 'https://res.cloudinary.com/dk9nwmeth/image/upload/v1684156458/Profile_Pic_Default_tgudip.png',
            posts: [],
            GamerTag: ' ',
            edithover: false,
            ispostdialog: true, 
            issaveddialog: false,
            islikeddialog: false,
            isstatsdialog: false, 
            myprofile: false,
            userId: this.$route.query.id,
            res: null,
            user: null,
            numfollowers: [],
            numfollowing: [],
        };
    },
    methods: {
        choosedialog(num) {
            this.posts = [];
            if (num === 1) {
                this.post();
                this.ispostdialog = true;
                this.issaveddialog = false;
                this.islikeddialog = false;
                this.isstatsdialog = false;
            }
            else if (num === 2) {
                this.saved();
                this.ispostdialog = false;
                this.issaveddialog = true;
                this.islikeddialog = false;
                this.isstatsdialog = false;
            }
            else if (num === 3) {
                this.liked();
                this.ispostdialog = false;
                this.issaveddialog = false;
                this.islikeddialog = true;
                this.isstatsdialog = false;
            }
            else if (num === 4) {
                this.ispostdialog = false;
                this.issaveddialog = false;
                this.islikeddialog = false;
                this.isstatsdialog = true;
            }

        },
        async requestfromserver(addr) {
            console.log("addr:", addr);
            try {
                const response = await axios.get(addr);

                var res = response.data;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        async requestfromserverpost(addr, objecttopass) {
            console.log("addr:", addr);
            try {
                const response = await axios.post(addr, objecttopass);

                var res = response.data;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        saved() {
            console.log("saved");
            var addr = 'https://backend-project-vzn7.onrender.com/profile/saved/' + this.userId;
            this.requestfromserver(addr).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.posts = res.savedpost;
                }
                else {
                    this.posts = false;
                }
            });
        },
        liked() {
            console.log("liked");
            var addr = 'https://backend-project-vzn7.onrender.com/profile/bumped/' + this.userId;
            this.requestfromserver(addr).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.posts = res.bumpedpost;
                } else {
                    this.posts = false;
                }
            });
        },


        follow() {
            console.log("follow:", this.differentUserId);
            var addr = 'https://backend-project-vzn7.onrender.com/follows';
            var objecttopass = {
                "id1": this.userId,
                "id2": this.differentUserId
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                if (res.status === "success") {
                    this.numfollowers++;
                }
            });
        },
        post() {
            console.log("post");
            var addr = 'https://backend-project-vzn7.onrender.com/profile';
            var objecttopass = {
            "profileid": this.userId,
            "idtocheck": this.differentUserId
             };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                this.posts = res.posts;
            });
        },
    },
    created() {
        console.log('userId:' + this.userId);
        console.log('differentUserId:' + this.differentUserId);
        var addr = "";
        var objecttopass = {
            "profileid": this.userId,
            "idtocheck": this.differentUserId
        };
        if (this.differentUserId === this.userId) {
            this.myprofile = true;
            console.log("same user");
        }
        else {
            console.log("different user");
        }
        addr = 'https://backend-project-vzn7.onrender.com/profile';
        this.requestfromserverpost(addr, objecttopass).then((res) => {
            console.log("res:", res);
            this.res = res;
            console.log("res:", this.res);
            this.user = res.user;
            this.profilePicture = this.user.Picture;
            this.posts = res.posts;
            this.GamerTag = this.user.GamerTag;
            if (res.followers && res.follows) {
                this.numfollowers = res.followers;
                this.numfollowing = res.follows;
            }
        });

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
    position: sticky;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 25px;
    padding-top: 25px;
    background-color: var(--backgroun);
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

.btn {
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 10px;
}

.username {
    color: #fff;
    font-weight: 500;
    font-size: 28px;
    margin: 0;
    margin-left: 10px;
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
    background-color: none;
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
    bottom: -40px;
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
    color: var(--white);
}

.navigation-item :hover {
    background-color: var(--hovercolor);
}

.chosen span {
    background-color: var(--main);
}

.navigation-icon {
    font-size: 16px;
    margin-top: 5px;
    opacity: 0.8;
}

.myposts {
    margin-top: 40px;
    padding-bottom: 50px;
}
</style>
  
  