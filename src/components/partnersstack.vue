<template>
    <div class="stack">
        <transition-group name="card-stack" tag="div" class="card-stack">
            <Card v-for="(partner, index) in partners" :key="index" :card="partner" :index="index" @swipe="handleSwipe" />
          
        </transition-group>
    </div>
</template>
  
<script>
import Card from '../components/partner.vue';

export default {
    props:['partners'],
    components: {
        Card,
    },
    data() {
        return {
        };
    },
    methods: {
        handleSwipe(direction, cardId) {
            // Handle the swipe action (e.g., update data, perform an API request, etc.)
            if (direction === 'right') {
               console.log('swiped right');
            } else if (direction === 'left') {
                console.log('swiped left');
            }

            // Remove the swiped card from the stack
            this.cards = this.cards.filter(card => card.id !== cardId);
        },
    },
    mounted(){
        console.log("partners from stack: ",this.partners);
    },
    
};
</script>
  
<style scoped>
.stack {
    position: relative;
    width: 100%;
    height: 100%;
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
</style>
  