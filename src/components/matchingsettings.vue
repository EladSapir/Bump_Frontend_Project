<template>
    <div class="container">
        <h2>Bumping Setup</h2>
        <div class="settingcontainer">
            <matchingchoosegame />
            <matchingcontainer />
         
        </div>
        <button class="btn">Find Partner</button>
    </div>
</template>

<script>
import axios from 'axios';
import matchingcontainer from '../components/matchingcontainer.vue';
import matchingchoosegame from '../components/matchingchoosegame';
export default {
    data() {
        return {
            res: '',
        }
    },
    components: {
        matchingcontainer,
        matchingchoosegame,
    },
    methods: {
        // Other methods
    },
    created() {
        this.userId = this.$route.query.id;
    },
}
</script>

<style scoped>
.container {
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    margin-top: 78px;
    background-color: var(--background);
    width: fit-content;
    height: fit-content;
    padding: 30px 100px;
}

h2 {
    font-weight: 600;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.01em;
    color: var(--main);
    margin-bottom: 30px;

}

.settingcontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    gap:30px;
}

.btn{
    margin-top: 30px;
    padding: 10px 80px;
}

</style>