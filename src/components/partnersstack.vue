<template>
    <div class="stack">
        <transition-group name="card-stack" tag="div" class="card-stack">
            <Card v-for="(card, index) in cards" :key="card.id" :card="card" :index="index" @swipe="handleSwipe" />
        </transition-group>
    </div>
</template>
  
<script>
import Card from '../components/partner.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            cards: [
                { id: 1, content: 'Card 1' },
                { id: 2, content: 'Card 2' },
                { id: 3, content: 'Card 3' },
                { id: 4, content: 'Card 4' },
            ],
        };
    },
    methods: {
        handleSwipe(direction, cardId) {
            // Handle the swipe action (e.g., update data, perform an API request, etc.)
            if (direction === 'right') {
                // Handle 'yes' action
            } else if (direction === 'left') {
                // Handle 'no' action
            }

            // Remove the swiped card from the stack
            this.cards = this.cards.filter(card => card.id !== cardId);
        },
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
  