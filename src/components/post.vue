<template>
    <div class="post-container">
        <div class="poststart">
            <div class="profile-picture">
                <img :src="require('../assets/' + post.profilePicture + '.png')" alt="Profile Picture" />
            </div>

            <div class="post-content">

                <div class="user-info">
                    <div class="user-name">{{ post.username }}</div>
                    <div class="post-date">{{ post.date }} - {{ post.time }}</div>
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
                            <img src="../assets/bump.svg" alt="Bump Icon" />
                            <span class="bump-count">{{ post.bump }} Bumps</span>
                        </div>
                        <div class="share">
                            <img src="../assets/shared.svg" alt="Share Icon" />
                            <span class="share-count">{{ post.share }} Shares</span>
                        </div>
                    </div>
                    <div class="checkboxes">
                        <div class="checkbox checkbump">
                            <img src="../assets/bump.svg" alt="Bump Icon" />
                            <p> Bump</p>
                        </div>
                        <div class="checkbox checkshare">
                            <img src="../assets/shared.svg" alt="Share Icon" />
                            <p> Share</p>
                        </div>
                        <div class="checkbox checksave">
                            <img src="../assets/save.svg" alt="Save Icon" />
                            <p> Save</p>
                        </div>
                    </div>
                    <div class="comment-section">
                        <div class="comment-profile-picture">
                            <img :src="require('../assets/' + profilePicture + '.png')" alt="User Profile Picture" />
                        </div>
                        <div class="comment-input">
                            <input type="text" placeholder="Write a comment here..." />
                            <button>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'post',
    props: ['post', 'profilePicture'],
    data() {
        return {
            comment: '',
        };
    },
    methods: {},
};
</script>

<style scoped>
.post-container {
    margin-top: 30px;
 
    width: 52.5%;
    background-color: var(--background);

    border: 1px solid var(--stroke);
    border-radius: 15px;
    /* Add any desired styling for the post container */
}
.poststart{
    padding: 20px;
    padding-right: 80px;
    display: flex;
    align-items: flex-start;
}
.profile-picture img {
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid var(--main);
}

.user-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-name {
    font-weight: bold;
    margin-right: 10px;
    color: var(--white);
}

.post-date {
    font-size: 12px;
    color: var(--stroke);

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
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
}

.checkbox img {
    margin-right: 5px;
    width: 20px;
}

.checkbump {
    padding-left: 50px;
}

.checksave {
    padding-right: 50px;
}

.bump-count,
.share-count {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
}

.checkshare {
    padding-left: 85px;
    padding-right: 90px;
    border-right: 1px solid var(--stroke);
    border-left: 1px solid var(--stroke);
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
    padding: 20px;;
}

.comment-profile-picture img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.comment-input input {
    width: 100%;
    resize: vertical;
    border-radius: 7.5px;
    min-height: 30px;
    background-color: var(--thirdcolor);
    border: none;
    color: var(--white);
    font-size: 16px;
    padding: 10px;
}

.comment-input input::placeholder {
    color: var(--white);
    opacity: 0.5;
}
</style>
