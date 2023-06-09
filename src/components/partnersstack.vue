<template>
    <div class="stack">
        <transition-group name="card-stack" tag="div" class="card-stack">
            <Card v-for="(partner, index) in partners" :key="index" :card="partner" :index="index" @swipe="handleSwipe" />

        </transition-group>
        <div v-if="partners.length != 0" class="emptycard1 card"></div>
        <div v-if="partners.length != 0" class="emptycard2 card"></div>
        <div class="emptymsg" v-if="partners.length === 0">
            <emptymsg v-if="partners.length === 0" :emptymessage="'No more partners to show'" :ishome="false"></emptymsg>
        </div>
    </div>
</template>
  
<script>
import Card from '../components/partner.vue';
import Emptymsg from '../components/emptymessage.vue';
import axios from 'axios';
export default {
    props: ['partners'],
    components: {
        Card, emptymsg: Emptymsg
    },
    data() {
        return {
            userId1: this.$route.query.id,
        };
    },
    methods: {
        async handleSwipe(direction, cardId, card) {
            // Handle the swipe action (e.g., update data, perform an API request, etc.)
            let flag = false;
            var addr = 'https://backend-project-vzn7.onrender.com/handlematch';
            if (direction === 'right') {
                console.log('swiped right');
                flag = true;
            } else if (direction === 'left') {
                console.log('swiped left');
                flag = false;
            }
            var objecttopass = {
                "userId1": this.userId1,
                "flag": flag,
                "userId2": card
            }
            console.log("objecttopass:", objecttopass);
            // Remove the swiped card from the stack
            const res = await this.requestfromserverpost(addr, objecttopass)

            if (res) {
                console.log("match found");
                this.$emit('matchfound');
            }
            else {
                console.log("match not found");
            }
            this.partners.splice(cardId, 1);

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
    },
    mounted() {
        console.log("partners from stack: ", this.partners);
    },

};
</script>
  
<style scoped>
.stack {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-stack {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}



.card-stack .enter-active,
.card-stack .leave-active {
    transition: all 0.5s;
}

.card-stack .enter,
.card-stack .leave-to {
    opacity: 0;
    transform: translateY(50px);
}

.card {
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    box-shadow: 0px 12px 20px var(--shadow);
    border-radius: 25px;
    padding: 20px;

}

.emptycard1 {

    margin-top: 20px;
    margin-right: 20px;
}

.emptycard2 {
    margin-left: 20px;
    margin-top: 20px;

}

.emptymsg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
  