<template>
    <div class="matchingcontainer">
        <div class="gamesselectrow">
            <div class="gamebox">
                <img src="../assets/lol.svg" alt="Rocket League" class="gameicon" />
            </div>
            <div class="gamebox">
                <img src="../assets/rocket.svg" alt="Rocket League" class="gameiconRL" />
            </div>
            <div class="gamebox">
                <img src="../assets/valorant.svg" alt="Rocket League" class="gameicon" />
            </div>
        </div>
        <div class="playerinforow">
            <div class="div1">
                <p>Match Info</p>
                <select >
                    <option>Region</option>
                </select>
            </div>
            <div class="div2">
                <p>Player Info</p>
                <input type="text" placeholder="Role" />
            </div>
            <div class="div3">
                <input type="text" placeholder="Mode" />
            </div>
            <div class="div4">
                <input type="text" placeholder="" />
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'matchingcontainer',
    components: {
    },
    data() {
        return {
            selectedCountry: 'United States',
            selectedLanguage: 'English',
            selectedGame: '',
            countries: ['United States', 'Canada', 'United Kingdom', 'Australia', /* Add more countries */],
            languages: ['English', 'Spanish', 'French', 'German', /* Add more languages */],
            games: ['League of Legends', 'Rocket League', 'Valorant', /* Add more games */],
        };
    },
    methods: {
        findPartner() {
            // Logic to find matching profiles based on selected parameters
        },
    },
}
</script>
  
<style scoped>
.matchingcontainer {
    display: flex;
    position: absolute;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    width: 500px;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%) translateX(-50%);
    top: 50%;
    left: 50%;
}

.gamesselectrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    width: 100%;
}

.gamebox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 75px;
    border: 3px solid var(--stroke);
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.gamebox:hover {
    background-color: var(--stroke);
}

.gameicon {
    width: 50px;
    height: 50px;
}

.gameiconRL {
    width: 60px;
    height: 60px;
}

.playerinforow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
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
</style>
  