<template>
    <div class="post-container">
        <div class="profile-picture">
            <img :src="profilePicture" alt="Profile Picture" />
        </div>
        <div class="post-content">
            <textarea v-model="postText" :rows="textareaRows" :cols="textareaCols" placeholder="Write your post"></textarea>
            <div class="post-actions">
                <p class="presentphotoname">{{ photoname }}</p>
                <div class="add-photo">
                    <img v-if="addphoto && !photo" src="../assets/add_photo_stroke.svg" alt="Add Photo"
                        @click="openFilePicker" @mouseenter="addphoto = false" />
                    <img v-else src="../assets/add_photo_alternate.svg" alt="Add Photo" @click="openFilePicker"
                        @mouseleave="addphoto = true" />
                    <input type="file" ref="fileInput" style="display: none" accept="image/*" @change="handleFileChange" />
                </div>
                <button @click="submitPost">Post</button>
            </div>
        </div>
    </div>
</template>
  
<script>
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dk9nwmeth/upload'
var CLOUDINARY_UPLOAD_PRESET = 'auhzhahq'
import axios from 'axios';
export default {
    name: 'createpost',
    props: ['profilePicture'],
    data() {
        return {
            postText: '',
            photo: null,
            addphoto: true,
            photoname: ' ',
            userId: this.$route.query.id,
            textareaRows: 1,
            textareaCols: 20 
        };
    },
    watch: {
    inputText() {
      this.adjustTextareaSize();
    }
  },
    methods: {
        adjustTextareaSize() {
      const lines = this.inputText.split('\n');
      this.textareaRows = lines.length;
      this.textareaCols = Math.max(...lines.map(line => line.length)) + 1;
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
                console.log(response.data.secure_url);
                return response.data.secure_url;
            } catch (err) {
                console.error(err);
            }
      
        },
        async submitPost() {
            // You can perform any necessary post submission logic here
            if (!this.postText) {
                alert("Please write something")
                return;
            }
            try {
                if(this.photo)
                     this.photo = await this.uploadFile();
                console.log('photo:' + this.photo);
                var addr = 'https://backend-project-vzn7.onrender.com/createpost';
                console.log('userid:' + this.userId);
                console.log('photo:' + this.photo);
                console.log('postText:' + this.postText);
                const response = await axios.post(addr, {
                    "id": this.userId,
                    "text": this.postText,
                    "picture": this.photo,
                });

                // Extract the user ID from the response
                const res = response.data;
                console.log("createpost:" + res);
                if (res) {
                    this.$emit('createpost')
                    this.postText = ''; // Clear the text box
                    this.photo = null; // Clear the photo
                    this.photoname = '';

                    alert("Post created successfully")
                }
                else {
                    console.log("createpost failed");
                }

            } catch (error) {
                console.error(error);
                // Handle the error (e.g., show an error message)
            }

        },
        openFilePicker() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            this.imageData = document.querySelector('input[type="file"]');
            const file = this.imageData.files[0];
            this.photo = file;

            if (file) {
                this.photoname = file.name;
            } else {
                this.photoname = '';
            }

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
    width: calc(100vw - 52.4vw);
    background-color: var(--background);
    padding: 20px;
    border: 1px solid var(--stroke);
    border-radius: 15px;
}

.profile-picture{
    position: relative;
    width:60px;
    height:60px;
    margin-right:15px;
}
.profile-picture img {
    position:absolute;
    width:100%;
    height:100%;
    object-fit: fill;

    top:0;
    left:0;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid var(--main);

}

.presentphotoname {
    margin-right: 20px;
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

.add-photo img {
    margin-top: 10px;
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
    cursor: pointer;
}
</style>
