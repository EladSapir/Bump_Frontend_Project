<template>
    <div class="container" :class="{ 'fade-in': fadeIn }">
        <h2>Bumping Setup</h2>
        <div class="settingcontainer">
            <matchingchoosegame />
            <matchingcontainer ref="matchingcontainer" @partners="handlepartners" />
        </div>
        <button class="btn" @click="handleclick">Find Partner</button>
    </div>
    <loading v-if="isloading" />
</template>

<script>
import matchingcontainer from '../components/matchingcontainer.vue';
import matchingchoosegame from '../components/matchingchoosegame';
import loading from '../components/loading.vue';
export default {
    data() {
        return {
            res: '',
            fadeIn: false,
            isloading: false,
        };
    },
    components: {
        matchingcontainer,
        matchingchoosegame,
        loading,
    },
    methods: {
        handleclick() {
            this.isloading = true;
            this.$refs.matchingcontainer.findPartner();
        },
        handlepartners(partners) {
            this.isloading = false;
            console.log(partners);
            this.$emit('match', partners);
        },
    },
    created() {
        this.userId = this.$route.query.id;
    },
    mounted() {
        setTimeout(() => {
            this.fadeIn = true;
        }, 100);
    },
};
</script>

<style scoped>
.container {
    margin-top: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--background);
    width: fit-content;
    height: fit-content;
    padding: 30px 100px;
    opacity: 0;
    border-radius: 25px;
    transform: translate(-50%, -50%) scale(0.9);
    transition: opacity 0.5s, transform 0.5s;
}

.fade-in {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

h2 {
    margin-bottom: 35px;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--main);
    font-size: 58px;
    line-height: 54px;
    text-shadow: 2px 5px 0 var(--hover);
}

.settingcontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 30px;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.5s, transform 0.5s;
}

.container.fade-in .settingcontainer {
    opacity: 1;
    transform: translateX(0);
}

.btn {
    margin-top: 30px;
    padding: 10px 80px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
}

.container.fade-in .btn {
    opacity: 1;
    transform: translateY(0);
}
</style>
