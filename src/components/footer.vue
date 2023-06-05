<template>
    <div class="footer">
        <div class="left">
            <p class="addunderline" @click="toggleAbout">About</p>
            <p class="addunderline" @click="toggleTerms">Terms and Conditions</p>
            <p class="addunderlinewithoutpointer">Contact us: BUMP@gmail.com</p>
        </div>

        <div class="right">
            <p class="addunderlinewithoutpointer">Copyright © 2023 BUMP. All rights reserved.</p>
        </div>
    </div>
    <div v-if="showAbout">
        <about @closeA="toggleAbout" />
    </div>
    <div v-if="showTerms">
        <terms @closeT="toggleTerms" />
    </div>
</template>
  
<script>
import about from '../components/about.vue'
import terms from '../components/terms.vue'

export default {
    name: 'Footer',
    data() {
        return {
            showAbout: false,
            showTerms: false
        }
    },
    components: {
        about,
        terms
    },
    methods: {
        toggleAbout() {
            console.log("toggle about")
            this.showAbout = !this.showAbout
            this.showTerms = false;

        },
        toggleTerms() {
            this.showTerms = !this.showTerms
            this.showAbout = false;
        }
    }
}
</script>

<style scoped>
p {
    margin: 0;
}

.footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: var(--background);
    border-radius: 25px 25px 0px 0px;
    border-top: 1px solid var(--footer);
    padding: 10px 50px;
    box-sizing: border-box;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: flex-start;
}

.addunderline {
    transition: text-decoration-color 0.3s ease;
}

.addunderlinewithoutpointer {
    transition: text-decoration-color 0.3s ease;
    /* Add transition for text-decoration-color */
}

.addunderline:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);
    text-decoration-thickness: 1.5px;
    cursor: pointer;

}

.addunderlinewithoutpointer:hover {
    text-decoration-color: var(--main);
    text-decoration-thickness: 1.5px;
}

.right {
    display: flex;
    padding-left: 30px;
    justify-content: flex-end;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>