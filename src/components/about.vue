<template>
    <div class="backdrop" @click.self="closeAbout">
        <div class="container">
            <img v-if="closehover" @click="closeAbout" id="close" src="../assets/closeoverlay.svg" @mouseover="closehover=!closehover" >
            <img v-else @click="closeAbout" id="close" src="../assets/closehover.svg" @mouseout="closehover=!closehover" >
            <img src="../assets/contact_support.svg">
            <h1>About</h1>
            <p>BUMP was founded by a group of six passionate software engineering students from SCE in Israel. As avid
                gamers ourselves, we understand the importance of having a supportive community of like-minded
                individuals
                who share our interests and love for gaming. Our goal is to provide a platform where gamers can connect,
                engage, and interact with each other in a fun and safe environment. At BUMP, we believe that gaming is
                more
                than just a hobby - it's a lifestyle. We aim to create a vibrant and inclusive community.</p>
            <p>Our team is dedicated to providing the best user experience possible, with features that enable users to
                easily find and connect with other gamers, share their experiences, and discover new games and gaming
                partners.
                We are committed to continuously improving BUMP and listening to our users' feedback to ensure that our
                platform remains relevant and enjoyable for everyone. Thank you for joining us on this exciting journey,
                and
                we look forward to connecting with you in the gaming world!</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            closehover: true
        }
    },
    props:
        ['showAbout'],
    methods: {
        closeAbout() {
            this.$emit('closeA')
        }
    }
}

</script>

<style scoped>
.container {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 60%;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2C394B;
    border: 1px solid #323244;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}

.container #close {
    position: fixed;
    right: 8px;
    top: 10px;
    width:20px;
    cursor: pointer;
}

.container img {
    width: 5%;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.692);
    width: 100%;
    height: 100%;
}

.container h1 {
    text-align: left;
}

.container p {
    color:  var(--white);
    text-align: left;
    font-size: 13px;
}
</style>