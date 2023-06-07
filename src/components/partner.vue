<template>
    <div class="card" :class="swipeDirection" @mousedown="startSwipe" @touchstart="startSwipe">
        <div class="header">
            <img class="profile-photo" :src="card.profilePhoto" alt="Profile Photo" />
            <div class="info">
                <div class="gamertag">{{ card.gamertag }}</div>
                <img class="game-logo" :src="card.gameLogo" alt="Game Logo" />
            </div>
        </div>
        <div class="information-section">
            <!-- Information section content -->
        </div>
        <div class="buttons">
            <button class="button-x">X</button>
            <button class="button-v">V</button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            startX: 0,
            deltaX: 0,
            swipeDirection: '',
        };
    },
    methods: {
        startSwipe(event) {
            this.startX = event.clientX || event.touches[0].clientX;
            document.addEventListener('mousemove', this.handleSwipe);
            document.addEventListener('touchmove', this.handleSwipe);
            document.addEventListener('mouseup', this.endSwipe);
            document.addEventListener('touchend', this.endSwipe);
        },
        handleSwipe(event) {
            const currentX = event.clientX || event.touches[0].clientX;
            this.deltaX = currentX - this.startX;

            // Determine the swipe direction based on the deltaX value
            if (this.deltaX > 0) {
                this.swipeDirection = 'right';
            } else if (this.deltaX < 0) {
                this.swipeDirection = 'left';
            } else {
                this.swipeDirection = '';
            }
        },
        endSwipe() {
            document.removeEventListener('mousemove', this.handleSwipe);
            document.removeEventListener('touchmove', this.handleSwipe);
            document.removeEventListener('mouseup', this.endSwipe);
            document.removeEventListener('touchend', this.endSwipe);

            // Emit the swipe event with the direction and card ID
            if (this.swipeDirection !== '') {
                this.$emit('swipe', this.swipeDirection, this.card.id);
            }

            this.startX = 0;
            this.deltaX = 0;
            this.swipeDirection = '';
        },
    },
};
</script>
  
<style scoped>
.card {
    position: relative;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.header {
    display: flex;
    align-items: center;
    padding: 10px;
}

.profile-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.info {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
}

.gamertag {
    font-size: 16px;
    font-weight: bold;
}

.game-logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
}

.information-section {
    padding: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.button-x {
    color: white;
    background-color: red;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
}

.button-v {
    color: white;
    background-color: green;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
}
</style>
  