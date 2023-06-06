<template>
    <div class="matchingcontainer">
        <h2>Choose Game</h2>
        <div class="gamesselectrow">
            <div class="gamebox" @click="chosenGame=''; game='lol'">
                <img v-if="res.VAL===null" src="../assets/leagueBW.svg" alt="lol" class="gameicon" />
                <img v-else src="../assets/lol.svg" alt="lol" class="gameicon"   />

            </div>
            <div class="gamebox" @click="chosenGame=''; game='rocket'">
                <img  v-if="res.VAL===null" src="../assets/rocketBW.svg" alt="Rocket League" class="gameiconRL" />
                <img v-else src="../assets/rocket.svg" alt="Rocket League" class="gameicon"  />

            </div>
            <div class="gamebox"  @click="chosenGame=res.VAL; game='valorant'" >
                <img   v-if="res.VAL===null" src="../assets/valorantBW.svg" alt="valorant" class="gameicon" />
                <img v-else src="../assets/valorant.svg" alt="valorant" class="gameicon"  />

            </div>
        </div>
        <div class="playerinforow" v-if="rocket && game==='lol'">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <p>{{chosenGame.Region}}</p>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <p>{{chosenGame.Role}}</p>
                </div>
            </div>
            <div class="div3">
                <div class="setting">
                    <p>{{chosenGame.Mode}}</p>
                </div>
            </div>
            <div class="div4">
                <div class="setting">
                    <p>{{chosenGame.Mode}}</p>
                </div>
            </div>
        </div>

        <div class="playerinforow" v-if="game ==='valorant' || game=== 'rocket'">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <p v-if="game==='valorant'">{{chosenGame.Server}}</p>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <p>{{chosenGame.Role}}</p>
                </div>
            </div>
            <div class="div5">
                <div class="setting">
                    <p>{{chosenGame.Rank}}</p>
                </div>
            </div>
        </div>

        <div class="propertiesrow">
            <div class="div1">
                <p class="title">Country</p>
                <div class="setting">
                    <p>{{res.Country}}</p>
                </div>
            </div>
            <div class="div2">
                <p class="title">Language</p>
                <div class="setting">
                    <p>{{res.Language}}</p>
                </div>
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
            VAL: null,
            rocket: true,
            lol: null,
            chosenGame: '',
            game: 'lol',
            selectedCountry: 'United States',
            userID: '',
            res: '',
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
    },
    async created() {
        this.userID = this.$route.query.id;
        console.log("userID:", this.userID);
        let addr='https://backend-project-vzn7.onrender.com/matchingpage/'+this.userID;
        this.res =await this.requestfromserver(addr);
        console.log("res:", this.res);
        this.chosenGame=this.res.VAL;
        console.log("chosenGame:", this.chosenGame);
        this.game='lol'
        if(this.res.VAL!=null){
            this.VAL=true;
        }
        if(this.res.rocket!=null){
            this.rocket=true;
        }
        if(this.res.lol!=null){
            this.lol=true;
        }
    
    },

}
</script>
  
<style scoped>
.matchingcontainer {
    display: flex;
    background-color: var(--thirdcolor);
    border: 1px solid var(--stroke);
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 15px;
}

.gamebox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 75px;
    border: 2px solid var(--stroke);
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.gamebox:hover {
    border: 2px solid var(--main);
}


.gameicon {
    width: 50px;
    height: 50px;
}

.gameiconRL {
    width: 60px;
    height: 60px;
}

p {
   color: var(--text);
   font-size: 16px;
}

.title {
    font-size: 16px;
    margin-bottom: 5px;
    color: var(--white);
}

.gamesselectrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    width: 100%;
    margin-bottom: 20px;
}

.playerinforow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    border-bottom: 1px solid var(--stroke);
    margin-bottom: 25px;
}

.propertiesrow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
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

.div5{
    grid-area: 2 / 1 / 3 / 3;
}

.setting {
    width: 254px;
    height: 43px;
    border: 1px solid var(--stroke);
    background-color: var(--white);
    border-radius: 15px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.div5 .setting {
    width: 550px;
}
</style>
  