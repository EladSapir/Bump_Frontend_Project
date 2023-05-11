<template>
    <div class="post-container">
        <div class="profile-picture">
            <img :src="require('../assets/' + profilePicture + '.png')" alt="Profile Picture" />
        </div>
        <div class="post-content">
            <textarea v-model="postText" placeholder="Write your post"></textarea>
            <div class="post-actions">
                <div class="add-photo">
                    <img src="../assets/add_photo_alternate.svg" alt="Add Photo" @click="openFilePicker" />
                    <input type="file" ref="fileInput" style="display: none" accept="image/*" @change="handleFileChange" />
                </div>
                <button @click="submitPost">Post</button>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'createpost',
    props: ['profilePicture'],
    data() {
        return {
            postText: '',
            photo: null
        };
    },
    methods: {
        submitPost() {
            // You can perform any necessary post submission logic here
            console.log('Post submitted:', this.postText);
        },
        openFilePicker() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            this.photo = file;
            // Handle the selected file here
            console.log('Selected file:', file);
            // You can further process or upload the file to your backend
        }
    }
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
}

.profile-picture img {
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid var(--main);

}

.post-content {
    flex-grow: 1;
}

textarea {
  width: calc(100% - 42px);
  height: 40px;
  padding: 10px 20px;
  border-radius: 15px;
  border: 2px solid var(--stroke);
  background-color: var(--thirdcolor);
  color: var(--white);
  font-family: var(--mainfont);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  resize: vertical;
}


::placeholder {
    color: var(--white);
    opacity: 0.5;
}

.post-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
}

.add-photo {
    margin-right: 10px;
    cursor: pointer;
}

button {
    border: 3px solid var(--white);
    background-color: var(--stroke);
    color: var(--main);
    height: 40px;
    width: 100px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 7px;
    transition: 0.5s;
}

button:hover {
    background-color: var(--main);
    color: var(--white);
}
</style>
