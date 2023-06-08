<template>
  <div class="card" :class="swipeDirection" @mousedown="startSwipe" @touchstart="startSwipe" ref="card">
        <div class="header">
            <img class="profile-photo" :src="profilePhoto" alt="Profile Photo" />
            <div class="info">
                <h3 class="gamertag">{{ gamertag }}</h3>
                <div class="game-logo-container">
                    <img v-if="game === 'VAL'" class="game-logo" src="../assets/valorant.svg" alt="Game Logo" />
                    <img v-if="game === 'LOL'" class="game-logo" src="../assets/lol.svg" alt="Game Logo" />
                    <img v-if="game === 'RL'" class="game-logo" src="../assets/rocket.svg" alt="Game Logo" />
                </div>
            </div>
        </div>
        <div class="information-section">
            <div class="playerinforow" v-if="game === 'LOL'">
                <div class="div1">
                    <p class="title">Match Info</p>
                    <div class="setting">
                        <p>{{ LOL.Region }}</p>
                    </div>
                </div>
                <div class="div2">
                    <p class="title">Player Info</p>
                    <div class="setting">
                        <p>{{ LOL.Role }}</p>
                    </div>
                </div>
                <div class="div3">
                    <div class="setting">
                        <p>{{ LOL.Mode }}</p>
                    </div>
                </div>
                <div class="div4">
                    <div class="setting">
                        <p>{{ LOL.Rank }}</p>
                    </div>
                </div>
            </div>

            <div class="playerinforow" v-if="game === 'VAL' || game === 'RL'">
                <div class="div1">
                    <p class="title">Match Info</p>
                    <div class="setting">
                        <p v-if="game === 'VAL'">{{ VAL.Server }}</p>
                        <p v-else>{{ RL.Region }}</p>
                    </div>
                </div>
                <div class="div2">
                    <p class="title">Player Info</p>
                    <div class="setting">
                        <p v-if="game === 'VAL'">{{ VAL.Role }}</p>
                        <p v-else>{{ RL.Mode }}</p>
                    </div>
                </div>
                <div class="div5">
                    <div class="setting">
                        <p v-if="game === 'VAL'">{{ VAL.Rank }}</p>
                        <p v-else>{{ RL.Rank }}</p>
                    </div>
                </div>
            </div>


            <div class="propertiesrow">
                <div class="div1">
                    <p class="title">Country</p>
                    <div class="setting">
                        <p>{{ country }}</p>
                    </div>
                </div>
                <div class="div2">
                    <p class="title">Language</p>
                    <div class="setting">
                        <p>{{ language }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button class="button-x" @click="swipeleft">X</button>
            <button class="button-v" @click="swiperight">V</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
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
            transitionDuration: '0s',
            country: 'country',
            language: 'language',
            VAL: { Server: 'N/A', Role: 'N/A', Rank: 'N/A' },
            RL: { Region: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            LOL: { Region: 'N/A', Role: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            gamertag: 'gamertag',
            profilePhoto: '',
            gander: '',
            game: '',
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

      // Calculate the opacity and transform values based on the swipe distance
      const opacity = 1 - Math.abs(this.deltaX / 300);
      const translateX = `${this.deltaX}px`;

      // Apply the transition style to animate the card movement
      this.transitionDuration = '0s'; // Reset transition duration
      requestAnimationFrame(() => {
        // Use requestAnimationFrame to ensure smooth animation
        this.$refs.card.style.opacity = opacity;
        this.$refs.card.style.transform = `translateX(${translateX})`;
      });
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

      // Reset the card position and transition duration
      this.deltaX = 0;
      this.swipeDirection = '';
      this.transitionDuration = '0.5s'; // Set transition duration for smooth reset
      this.$refs.card.style.opacity = '1';
      this.$refs.card.style.transform = 'translateX(0)';
    },
        async requestfromserver(addr) {
            this.isloading = true;
            console.log("addr:", addr);
            try {
                const response = await axios.get(addr);

                var res = response.data;
                this.isloading = false;
                console.log("res:", res);
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        swipeleft() {
            this.$emit('swipe', 'left', this.index);
        },
        swiperight() {
            this.$emit('swipe', 'right', this.index);
        },
    },
    async created() {

        console.log("card:", this.card);
        let addr1 = 'https://backend-project-vzn7.onrender.com/matchingpage/' + this.card;
        var res1 = await this.requestfromserver(addr1);
        let addr2 = 'https://backend-project-vzn7.onrender.com/userdetails/' + this.card;
        var res2 = await this.requestfromserver(addr2);
        this.country = res1.Country;
        this.language = res1.Language;
        if (res1.LOL) {
            this.LOL = res1.LOL;
            this.game = "LOL";
        }
        else if (res1.RL) {
            this.RL = res1.RL;
            this.game = "RL";
        }
        else if (res1.VAL) {
            this.VAL = res1.VAL;
            this.game = "VAL";
        }
        this.gamertag = res2.GamerTag;
        this.profilePhoto = res2.Picture;
        this.gander = res2.Gender;

    },
};
</script>
  
<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    background-color: var(--background);
    opacity: 0.8;
    border: 1px solid var(--stroke);
    box-shadow: 0px 12px 20px var(--shadow);
    border-radius: 25px;
    overflow: hidden;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    padding: 10px;
}

.profile-photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
}

.info {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.gamertag {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 50px;
}

.game-logo {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.game-logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 75px;
    border: 2px solid var(--main);
    background-color: var(--pagebgcolor);
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.information-section {
    padding: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
}

.button-x {
    color: white;
    background-color: red;
    border: none;
    border-radius: 15px;
    padding: 5px 61px;
    font-size: 30px;
    cursor: pointer;
}

.button-v {
    color: white;
    background-color: green;
    border: none;
    border-radius: 15px;
    padding: 5px 61px;
    font-size: 30px;
    cursor: pointer;
}

.button-x:hover {
    background-color: #e72d0c;
}

.button-v:hover {
    background-color: #2bac04;
}


.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    grid-area: 2 / 1 / 3 / 2;
}

.div4 {
    grid-area: 2 / 2 / 3 / 3;
}

.div5 {
    grid-area: 2 / 1 / 3 / 3;
}

.setting {
    width: 140px;
    height: 33px;
    border: 1px solid var(--stroke);
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.div5 .setting {
    width: 100%;
}

.setting p {
    color: var(--textcolor);
    font-size: 14px;
    margin-left: 10px;
}

.setting:hover {
    border: 1px solid var(--main);
}

.title {
    font-size: 14px;
    font-weight: 300;
}

.playerinforow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 10px;
    gap: 10px;
}

.propertiesrow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

}
</style>
  