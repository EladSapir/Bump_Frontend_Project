<template>
    <div class="profile">
        <navbar @openProfile="choosedialog" />

        <div class="user-profile">
            <div class="profile-picture">
                <img :src="Picture" alt="Profile Picture" />
            </div>
            <div class="user-info">
                <div class="myprofile" :class="{ userplusbtn: !myprofile }">
                    <h2 class="username">{{ GamerTag }}</h2>
                    <button v-if="!myprofile && !isfollowing" class="btn" @click="follow">
                        Follow
                    </button>
                    <button v-if="!myprofile && isfollowing" class="btn" @click="unfollow">
                        Unfollow
                    </button>
                </div>

                <div class="user-stats">
                    <div class="followers">
                        <span>Followers</span>
                        <p @click="openfollowers = true">{{ numfollowers }}</p>
                        <followpopup v-if="openfollowers" :followingUsers="followers" @openProfile="choosedialog"
                            :heading="'Followers users'" @close="openfollowers = false" />
                    </div>
                    <div class="following">
                        <span>Following</span>
                        <p @click="openfollowing = true">{{ numfollowing }}</p>
                        <followpopup v-if="openfollowing" :followingUsers="following" @openProfile="choosedialog"
                            :heading="'Following users'" @close="openfollowing = false" />
                    </div>
                </div>
            </div>


            <div v-if="myprofile" class="profile-actions" @click="iseditmodeon = true">
                <img v-if="!edithover" src="../assets/edit_square.svg" alt="edit profile" @mouseenter="edithover = true" />
                <img v-else src="../assets/edit_square_hover.svg" alt="edit profile" @mouseout="edithover = false" />
            </div>
        </div>
        <div class="profilecontent">
            <div v-if="!iseditmodeon" class="profile-navigation">
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(1)" :class="{ chosen: ispostdialog }">
                    <span class="navigation-icon">Posts</span><img src="../assets/post_icon.svg" alt="post icon" />
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(2)" :class="{ chosen: issaveddialog }">
                    <span class="navigation-icon">Saved</span><img src="../assets/saved_icon.svg" alt="post icon" />
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(3)" :class="{ chosen: islikeddialog }">
                    <span class="navigation-icon">Bumped</span><img src="../assets/bump_icon.svg" alt="post icon" />
                </div>
                <div v-if="myprofile" class="navigation-item" @click="choosedialog(4)" :class="{ chosen: isstatsdialog }">
                    <span class="navigation-icon">Stats</span><img src="../assets/stats_icon.svg" alt="post icon" />
                </div>
            </div>
            <div class="allcontent">
                <div class="intro">
                    <div class="introcontent">
                        <h2>Intro</h2>
                        <h3>Favorite Games</h3>
                        <div class="favoritegamedetails">
                            <div class="league game">
                                <div class="gameimage">
                                    <img src="../assets/lol.svg" alt="game image" />
                                </div>
                                <div class="gamedetails">
                                    <p> <img src="../assets/south_america.svg"> Europe Nordic & East </p>
                                    <p> <img src="../assets/extension.svg"> Support </p>
                                    <p> <img src="../assets/sports_esports.svg"> 5 vs 5 Ranked Draft </p>
                                    <p> <img src="../assets/military_tech.svg"> Bronze </p>
                                </div>
                            </div>
                            <div class="rocket game">
                                <div class="gameimage">
                                    <img src="../assets/rocket.svg" alt="game image" />
                                </div>
                                <div class="gamedetails">
                                    <p> <img src="../assets/south_america.svg"> Europe Nordic & East </p>
                                    <p> <img src="../assets/military_tech.svg"> Support </p>
                                    <p> <img src="../assets/sports_esports.svg"> 5 vs 5 Ranked Draft </p>
                                    <p></p>
                                </div>
                            </div>
                            <div class="valorant game">
                                <div class="gameimage">
                                    <img src="../assets/valorant.svg" alt="game image" />
                                </div>
                                <div class="gamedetails">
                                    <p> <img src="../assets/south_america.svg"> Europe Nordic & East </p>
                                    <p> <img src="../assets/extension.svg"> Support </p>
                                    <p> <img src="../assets/military_tech.svg"> 5 vs 5 Ranked Draft </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="content" v-if="!iseditmodeon">
                    <div class="myposts" v-if="ispostdialog">
                        <post v-for="(apost, i) in posts" :key="apost.id" :post="posts[i]" :profilePicture="profilePicture"
                            :GamerTag="GamerTag" @openProfile="choosedialog" />
                        <emptymessage v-if="!posts && mine"
                            emptymessage="Looks like you haven't created any posts yet. Why not share your thoughts and ideas with the community?" />
                        <emptymessage v-if="!posts && !mine"
                            emptymessage="Looks like this user hasn't created any posts yet. Why not share your thoughts and ideas with the community?" />
                    </div>
                    <div class="myposts" v-if="issaveddialog">
                        <post v-for="(apost, i) in postsforsave" :key="apost.id" :post="postsforsave[i]"
                            :profilePicture="profilePicture" @deletepost="choosedialog(2)" @openProfile="choosedialog"
                            :GamerTag="GamerTag" />
                        <emptymessage v-if="!postsforsave"
                            emptymessage="You haven't saved any posts yet. Keep an eye out for interesting content to save for later!" />
                    </div>
                    <div class="myposts" v-if="islikeddialog">
                        <post v-for="(apost, i) in postsforlike" :key="apost.id" :post="postsforlike[i]"
                            :profilePicture="profilePicture" @deletepost="choosedialog(3)" @openProfile="choosedialog"
                            :GamerTag="GamerTag" />
                        <emptymessage v-if="!postsforlike"
                            emptymessage="You haven't liked any posts yet. Discover new content and show your appreciation by giving posts a 'like'!" />
                    </div>
                    <div class="myposts" v-if="isstatsdialog">
                        <stats />
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="isloading" />

    </div>
</template>

<script>
import loading from "../components/loading.vue";
import createpost from "../components/createpost.vue";
import navbar from "../components/navbar.vue";
import post from "../components/post.vue";
import axios from "axios";
import emptymessage from "../components/emptymessage";
import stats from "../components/stats.vue";
import followpopup from "../components/followpopup.vue";

export default {
    name: "profile",
    components: {
        navbar,
        createpost,
        post,
        emptymessage,
        stats,
        followpopup,
        loading,
    },
    props: ["differentUserId"],
    data() {
        return {
            iseditmodeon: false,
            Picture: '',
            profilePicture:
                "https://res.cloudinary.com/dk9nwmeth/image/upload/v1684156458/Profile_Pic_Default_tgudip.png",
            posts: [],
            GamerTag: " ",
            edithover: false,
            ispostdialog: true,
            issaveddialog: false,
            islikeddialog: false,
            isstatsdialog: false,
            myprofile: false,
            userId: this.$route.query.id,
            res: null,
            user: null,
            followers: [],
            following: [],
            numfollowers: 0,
            numfollowing: 0,
            isfollowing: false,
            openfollowing: false,
            openfollowers: false,
            postsforsave: [],
            postsforlike: [],
            isloading: false,
        };
    },
    methods: {
        choosedialog(num) {
            if (num === 1) {
                this.post(this.differentUserId);
                this.ispostdialog = true;
                this.issaveddialog = false;
                this.islikeddialog = false;
                this.isstatsdialog = false;
                this.posts = [];
            } else if (num === 2) {
                this.saved();
                this.ispostdialog = false;
                this.issaveddialog = true;
                this.islikeddialog = false;
                this.isstatsdialog = false;
                this.postsforsave = [];
            } else if (num === 3) {
                this.liked();
                this.ispostdialog = false;
                this.issaveddialog = false;
                this.islikeddialog = true;
                this.isstatsdialog = false;
                this.postsforlike = [];
            } else if (num === 4) {
                this.ispostdialog = false;
                this.issaveddialog = false;
                this.islikeddialog = false;
                this.isstatsdialog = true;
            } else {
                this.post(num);
                this.ispostdialog = true;
                this.issaveddialog = false;
                this.islikeddialog = false;
                this.isstatsdialog = false;
                this.posts = [];
            }
        },
        async requestfromserver(addr) {
            this.isloading = true;
            console.log("addr:", addr);
            try {
                const response = await axios.get(addr);

                var res = response.data;
                this.isloading = false;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        async requestfromserverpost(addr, objecttopass) {
            console.log("addr:", addr);
            this.isloading = true;
            try {
                const response = await axios.post(addr, objecttopass);
                this.isloading = false;
                var res = response.data;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        saved() {
            console.log("saved");
            var addr = "https://backend-project-vzn7.onrender.com/profile/saved/" + this.userId;
            this.requestfromserver(addr).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.postsforsave = res.savedpost;
                } else {
                    this.postsforsave = false;
                }
            });
        },
        liked() {
            console.log("liked");
            var addr =
                "https://backend-project-vzn7.onrender.com/profile/bumped/" + this.userId;
            this.requestfromserver(addr).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.postsforlike = res.bumpedpost;
                } else {
                    this.postsforlike = false;
                }
            });
        },
        follow() {
            console.log("follow:", this.differentUserId);
            var addr = "https://backend-project-vzn7.onrender.com/follows";
            var objecttopass = {
                id1: this.userId,
                id2: this.differentUserId,
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.numfollowers++;
                    this.isfollowing = true;
                }
            });
        },
        unfollow() {
            console.log("follow:", this.differentUserId);
            var addr = "https://backend-project-vzn7.onrender.com/unfollow";
            var objecttopass = {
                id1: this.userId,
                id2: this.differentUserId,
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                console.log("res:", res);
                if (res) {
                    this.numfollowers--;
                    this.isfollowing = false;
                }
            });
        },
        post(id) {
            this.isloading = true;
            this.myprofile = false;
            console.log("userId:" + this.userId);
            console.log("differentUserId:" + id);
            if (id === this.userId) {
                this.myprofile = true;
                console.log("same user");
            } else {
                console.log("different user");
            }
            console.log("post");
            var addr = "https://backend-project-vzn7.onrender.com/profile";
            var objecttopass = {
                profileid: id,
                idtocheck: this.userId,
            };
            this.requestfromserverpost(addr, objecttopass).then((res) => {
                this.isloading = false;
                console.log("res:", res);
                if (res.posts.length === 0) {
                    this.posts = false;
                } else {
                    this.posts = res.posts;
                }
                this.res = res;
                this.Picture = res.user.Picture;
                this.user = res.user;
                this.GamerTag = this.user.GamerTag;
                this.isfollowing = res.iffollows;
                console.log("profilePicture:", this.profilePicture);

                if (!this.myprofile) {
                    this.profilePicture = res.user2.Picture;

                }
                else {
                    this.profilePicture = this.user.Picture;

                }
                console.log("profilePicture:", this.profilePicture);
                if (res.followers && res.follows) {
                    this.followers = res.followers;
                    this.following = res.follows;
                    this.numfollowers = this.followers.length;
                    this.numfollowing = this.following.length;
                }
            });
        },
    },
    created() {
        this.post(this.differentUserId);
    },
};
</script>

<style scoped>
html {
    background-image: none !important;
}

.profile {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    background-color: var(--pagebgcolor);
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 30px;
}



.user-profile {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 25px;
    padding-top: 25px;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    z-index: 1;
}

.profile-picture img {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    border-radius: 50%;
}

.profile-picture {
    margin-left: 100px;
    margin-right: 15px;
}

.userplusbtn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.myprofile {
    display: flex;
    flex-direction: row;
    margin-left: 5px;
}

.user-info {
    display: flex;
    flex-direction: column;
    width: 230px;
}

.btn {
    padding: 7px 12px;
    border-radius: 10px;
    margin-left: 20px;
}

.username {
    background-color: var(--background);
    color: var(--white);
    font-weight: 650;
    font-size: 35px;
    line-height: 55px;
}

.user-stats {
    display: flex;
    flex-direction: row;
}

.following,
.followers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
}

.following {
    margin-left: 15px;
}

.user-stats p {
    color: var(--white);
    background-color: none;
    padding: 5px 0;
    width: 80px;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    border: 2px solid var(--grey);
    border-radius: 10px;
    font-weight: 500;
}

.user-stats p:hover {
    background-color: var(--hover);
    border: 2px solid var(--main);
    cursor: pointer;
}

.user-stats span {
    color: #fff;
    font-size: 14px;
    margin-bottom: 2px;
}

.profile-actions {
    position: absolute;
    right: 40px;
    top: 100px;
}

.profile-actions img {
    margin-left: 10px;
    cursor: pointer;
}

.profile-navigation {
    position: sticky;
    width: 100%;
    top: 90px;
    display: flex;
    margin: 20px;
}

.navigation-item {
    display: flex;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
}

.navigation-item:first-child {
    margin-left: 90px;
}

.navigation-item {
    background-color: #1b1e29;
    border: 2px solid var(--white);
    padding: 5px 15px;
    border-radius: 12px;
    text-align: center;
    color: var(--white);
    opacity: 0.7;
}

.navigation-item:hover {
    background-color: var(--hovercolor);
    opacity: 1;
}

.chosen.navigation-item {
    background-color: var(--main);
    opacity: 1;
}

.navigation-icon {
    font-size: 16px;
    margin-right: 5px;
}

.myposts {
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 0;
}

.allcontent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: start;
}


.profilecontent {
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 0;
    align-items: start;
}

.intro {
    position: sticky;
    top: 150px;
    height: fit-content;
    overflow-y: auto;
}

.introcontent {
    margin-left: 105px;
    margin-right: 80px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    border-radius: 15px;
    z-index: 0;
    padding: 0 15px ;
}

.introcontent h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin: 0;
    margin-top: 15px;
    margin-left: 15px;

}

.introcontent h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin: 0;
    margin: 15px;

}

.favoritegamedetails {
    display: flex;
    flex-direction: column;
}

.game {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid var(--stroke);
    padding: 15px;

}

.game:last-child {
    border-bottom: none;
}

.gamedetails {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}


.gameimage {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--stroke);
    width: 116.87px;
    height: 60.1px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 15px;
}

.gamedetails p {
    width: max-content;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.gamedetails p img {
    margin-right: 5px;
    width: 20px;
}

.content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 100px;
}
</style>
