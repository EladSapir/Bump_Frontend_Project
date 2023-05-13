<template>
    <div class="post-container">
        <div class="poststart">
            <div class="profile-picture" >
                <img  :class="{ mineclass: mine }" :src="require('../assets/' + profilePicture + '.png')"
                    alt="Profile Picture" />
            </div>

            <div class="post-content">

                <div class="user-info">
                    <div class="user-name">{{ post.GamerTag }}</div>
                    <div class="post-date">{{ post.date }}</div>
                </div>
                <div class="post-text">
                    {{ post.text }}
                </div>
            </div>
        </div>
        <div>
            <div class="allthepost">
                <div class="restofpost">

                    <div class="post-photo" v-if="post.photo">
                        <img :src="require('../assets/' + post.photo + '.png')" alt="Post Photo" />
                    </div>
                    <div class="post-actions">
                        <div class="bump">
                            <img src="../assets/bump.svg" alt="Bump Icon" style="width: 22px; margin:0;" />
                            <span class="bump-count">{{ post.numOfBumps }} Bumps</span>
                        </div>
                        <div class="share">
                            <img src="../assets/reply.svg" alt="Share Icon" />
                            <span class="share-count">{{ post.numofshares }} Shares</span>
                        </div>
                    </div>
                    <div class="checkboxes">
                        <div class="checkbox checkbump" @click="pressonbump">
                            <img v-if="!bumpselected" src="../assets/bump.svg" alt="Bump Icon" style="width: 25px;" />
                            <img v-else src="../assets/bumpselected.svg" alt="Bump Icon" style="width: 25px;" />
                            <p :class="{ selected: bumpselected }"> Bump</p>
                        </div>
                        <div class="outshare">
                            <div class="checkbox checkshare">
                                <img src="../assets/reply.svg" alt="Share Icon" style="width: 18px;" />
                                <p> Share</p>
                            </div>
                        </div>
                        <div class="checkbox checksave" @click="pressonsave">
                            <p :class="{ selected: saveselected }"> Save</p>
                            <img v-if="!saveselected" src="../assets/save.svg" alt="Save Icon" style="width: 25px;" />
                            <img v-else src="../assets/saveselected.svg" alt="Save Icon" style="width: 25px;" />
                        </div>
                    </div>
                    <div class="comments">
                        <div class="comment-section">
                            <div class="comment-profile-picture_mine">
                                <img class="profilepict"
                                    :src="require('../assets/' + profilePicture + '.png')" alt="User Profile Picture" />
                            </div>
                            <div class="comment-input">
                                <input type="text" placeholder="Write a comment here..." />
                                <img v-if="!sendhover" class="sendicon" src="../assets/send.svg" alt="Comment Icon"
                                    @mouseenter="sendhover = true">
                                <img v-else class="sendicon" src="../assets/sendhover.svg" alt="Comment Icon"
                                    @mouseleave="sendhover = false" />
                            </div>
                        </div>

                        <div class="comment" v-for="(comment, index) in visibleComments" :key="comment.id">
                            <div class="comment-profile-picture">
                                <img :class="{ mineclass: comment.userID===userId }" :src="require('../assets/' + profilePicture + '.png')"
                                    alt="User Profile Picture" />
                            </div>
                            <div class="comment-content">
                                <div class="user-info">
                                    <div class="user-name">{{ comment.GamerTag }}</div>
                                </div>
                                <div class="comment-text">
                                    {{ comment.text }}
                                </div>
                            </div>
                        </div>

                        <div v-if="post.comments.length > 3">
                            <button v-if="showAllComments" class="allcomments" @click="toggleComments">View Less
                                Comments</button>
                            <button class="allcomments" v-else @click="toggleComments">View More Comments</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'post',
    props: ['post', 'profilePicture'],
    data() {
        return {
            comment: '',
            bumpselected: this.post.hasUserBumped,
            saveselected: this.post.hasUserSaved,
            userId: this.$route.query.id,
            sendhover: false,
            showAllComments: false,
            visibleComments: this.post.comments
        };
    }, created() {
        this.updateVisibleComments();
    },
    methods: {
        toggleComments() {
            this.showAllComments = !this.showAllComments;
            this.updateVisibleComments();
        },
        updateVisibleComments() {
            if (this.showAllComments) {
                this.visibleComments = this.post.comments;
            } else {
                this.visibleComments = this.post.comments.slice(0, 3);
            }
        },
        async pressonbump() {
            try {
                console.log("isbumpselected:" + this.bumpselected);
                if (!this.bumpselected) {
                    var addr = 'https://backend-project-vzn7.onrender.com/addbump';
                    console.log('userid:' + this.userId);
                    console.log('postid:' + this.post._id);
                    console.log('bump:' + addr);
                    const response = await axios.post(addr, {
                        "user": this.userId,
                        "post": this.post._id
                    });

                    // Extract the user ID from the response
                    const res = response.data;
                    console.log("bump:" + res);
                    if (res) {
                        this.post.numOfBumps++;
                        this.bumpselected = !this.bumpselected;
                    }
                    else {
                        console.log("bump failed");
                    }
                }
                else {
                    var addr = 'https://backend-project-vzn7.onrender.com/removebump';
                    console.log('userid:' + this.userId);
                    console.log('postid:' + this.post._id);
                    console.log('bump:' + addr);
                    const response = await axios.post(addr, {
                        "user": this.userId,
                        "post": this.post._id
                    });

                    // Extract the user ID from the response
                    const res = response.data;
                    console.log("bump:" + res);
                    if (res) {
                        this.post.numOfBumps--;
                        this.bumpselected = !this.bumpselected;
                    }
                    else {
                        console.log("bump failed");
                    }
                }
            } catch (error) {
                console.error(error);
                // Handle the error (e.g., show an error message)
            }

        },
        async pressonsave() {
            try {
                console.log("issaveselected:" + this.saveselected);
                if (!this.saveselected) {
                    var addr = 'https://backend-project-vzn7.onrender.com/savepost';
                    console.log('userid:' + this.userId);
                    console.log('postid:' + this.post._id);
                    console.log('save:' + addr);
                    const response = await axios.post(addr, {
                        "user": this.userId,
                        "post": this.post._id
                    });

                    // Extract the user ID from the response
                    const res = response.data;
                    console.log("save:" + res);
                    if (res) {
                        this.saveselected = !this.saveselected
                    }
                    else {
                        console.log("save failed");
                    }
                }
                else {
                    var addr = 'https://backend-project-vzn7.onrender.com/removesaved';
                    console.log('userid:' + this.userId);
                    console.log('postid:' + this.post._id);
                    console.log('save:' + addr);
                    const response = await axios.post(addr, {
                        "user": this.userId,
                        "post": this.post._id
                    });

                    // Extract the user ID from the response
                    const res = response.data;
                    console.log("save:" + res);
                    if (res) {
                        this.saveselected = !this.saveselected
                    }
                    else {
                        console.log("save failed");
                    }
                }
            } catch (error) {
                console.error(error);
                // Handle the error (e.g., show an error message)
            }

        },
    },
    created() {
        this.userId = this.$route.query.id;
        console.log("userId:" + this.userId);
        console.log("post.userId:" + this.post.userID);
        if (this.post.userID === this.userId) {
            this.mine = true;
            console.log("mine");
        }
    },
};
</script>

<style scoped>
.post-container {
    margin-top: 30px;

    width: calc(100vw - 50vw);
    background-color: var(--background);

    border: 1px solid var(--stroke);
    border-radius: 15px;
    /* Add any desired styling for the post container */
}

.poststart {
    padding: 20px;
    padding-right: 80px;
    display: flex;
    align-items: flex-start;
}

.profile-picture img {
    margin-right: 15px;
    border-radius: 50%;
    border: 2px solid var(--white);
}

.user-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.user-name {
    font-weight: bold;
    margin-right: 10px;
    color: var(--white);
}

.post-date {
    font-size: 12px;
    color: var(--grey);

}

.post-text {
    margin-bottom: 20px;
    color: var(--white);
}

.post-photo img {
    width: 100%;
    margin-bottom: 20px;
}

.post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 20px;
}


.bump,
.share {
    display: flex;
    align-items: center;
    color: var(--gray);
}


.checkbox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
}

.checkbox:hover {
    cursor: pointer;
    background-color: var(--stroke);
    border-radius: 15px;
}



.checkbox p {
    font-size: 15px;
    color: var(--grey);
}

.checkbox img {
    margin-right: 5px;
    width: 20px;
}

.checkbump {
    padding: 0 50px;
}

.checksave {
    padding: 0 50px;
}

.bump-count,
.share-count {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--grey);
    font-size: 12px;
}

.bump img {
    width: 25px;
    margin-right: 5px;
}

.share img {
    width: 15px;
    margin-right: 5px;
}

.checkboxes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    border-top: 1px solid var(--stroke);
    border-bottom: 1px solid var(--stroke);
    padding: 5px 10px;
}

.outshare {
    border-right: 1px solid var(--stroke);
    border-left: 1px solid var(--stroke);
    padding: 0 5px;
    margin: 0 5px;

}

.checkshare {
    width: auto;
    padding: 0 110px;

}

.checkshare img {
    width: 15px;

}

.checkbox-label {
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: var(--white);
}

.checkbox-input {
    margin-right: 5px;
}

.checkbox-icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

.comment-section {
    display: flex;
    align-items: center;
    padding: 20px;
    ;
}

.comment-profile-picture img {
    border: 2px solid var(--white);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 7px;
}

.comment-input input {
    width: calc(100% - 40px);
    resize: vertical;
    border-radius: 7.5px;
    min-height: 25px;
    background-color: var(--thirdcolor);
    border: none;
    color: var(--white);
    font-size: 16px;
    padding: 10px;
}

.comment-profile-picture_mine img{
    border: 2px solid var(--main);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 7px;
}
.comment-input input::placeholder {
    color: var(--white);
    opacity: 0.5;
}

.comment-input {
    position: relative;
    width: 100%;
}

.sendicon {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 30px;
    transform: translate(-50%, -50%);
}

p.selected {
    color: var(--main);
    cursor: pointer;
    border-radius: 15px;
}


.comment {
    display: flex;
    align-items: flex-start;
    padding: 10px;
    padding-left: 30px;
    padding-right: 80px;
}



.comment-content {
    display: flex;
    flex-direction: column;
    border-radius: 7.5px;
    min-height: 25px;
    background-color: var(--thirdcolor);
    border: none;
    color: var(--white);
    font-size: 16px;
    padding: 10px 20px;
}

.comment-content .user-info {
    margin-bottom: 5px;
}

.comment-text {
    color: var(--white);
}

.allcomments {
    padding: 10px;
    padding-left: 30px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: var(--white);
    font-size: 16px;
    border-radius: 7.5px;
    margin-bottom: 10px;
}

.allcomments:hover {
    cursor: pointer;
    text-decoration: underline;
}

.mineclass {
    border: 2px solid var(--main) !important;
}
</style>
