<template>
    <div class="post-container">
        <div class="profile-picture">
            <img :src="require('../assets/' + post.profilePicture + '.png')" alt="Profile Picture" />
        </div>
        <div class="post-content">
            <div class="user-info">
                <div class="user-name">{{post.username}}</div>
                <div class="post-date">{{ post.date }} - {{post.hour}}</div>
            </div>
            <div class="post-text">
                {{ post.text }}
            </div>
            <div class="post-photo" v-if="post.Picture">
                <img :src="require('../assets/' + post.Picture + '.png')" alt="Post Photo" />
            </div>
            <div class="post-actions">
                <div class="bump">
                    <img src="../assets/bump.svg" alt="Bump Icon" />
                    <span class="bump-count">{{post.bump}} Bumps</span>
                </div>
                <div class="share">
                    <img src="../assets/shared.svg" alt="Share Icon" />
                    <span class="share-count">{{post.share}} Shares</span>
                </div>
            </div>
            <div class="checkboxes">
                <div class="bump">
                    <img src="../assets/bump.svg" alt="Bump Icon" />
                    <p> Bump</p>
                </div>
                <div class="share">
                    <img src="../assets/upload.svg" alt="Share Icon" />
                    <p> Share</p>
                </div>
                <div class="save">
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
</template>
  
<script>
export default {
    name: 'post',
    props: ['post','profilePicture'],
    data() {
        return {
            comment
        };
    },
    methods: {},
};
</script>

<style scoped>
.post-container {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    width: 50%;
    background-color: var(--background);
    padding: 20px;
    border: 1px solid var(--stroke);
    border-radius: 15px;
    /* Add any desired styling for the post container */
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
}

.post-date {
    font-size: 12px;
    color: var(--gray);
}

.post-text {
    margin-bottom: 10px;
}

.post-photo img {
    width: 100%;
    margin-bottom: 10px;
}

.post-actions {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.bump,
.share {
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: var(--gray);
}

.bump-count,
.share-count {
    margin-left: 5px;
}

.checkboxes {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
