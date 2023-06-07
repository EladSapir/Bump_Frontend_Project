<template>
    <div class="introcontent">
        <h2>Intro</h2>
        <h3>Favorite Games</h3>
        <div class="favoritegamedetails">
            <div class="league game">
                <div class="gameimage">
                    <img :class="{ BW : !selectedlol }"  class="gamelogo"  src="../assets/lol.svg" alt="game image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select v-if="selectedlol" class="col1">
                            <option value="">Region</option>
                            <option value="North America">North America</option>
                            <option value="Europe West">Europe West</option>
                            <option value="Europe Nordic & East">Europe Nordic & East</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    </p>
                    <p> <img src="../assets/extension.svg">
                        <select v-if="selectedlol" class="col2">
                            <option value="">Mode</option>
                            <option value="Normal">Normal</option>
                            <option value="Draft">Draft</option>
                            <option value="Duo">Duo</option>
                            <option value="ARAM">ARAM</option>
                        </select>
                    </p>
                    <p> <img src="../assets/sports_esports.svg">
                        <select v-if="selectedlol" class="col1">
                            <option value="">Role</option>
                            <option value="Top">Top</option>
                            <option value="Mid">Mid</option>
                            <option value="ADC">ADC</option>
                            <option value="Support">Support</option>
                            <option value="Jungle">Jungle</option>
                        </select>
                    </p>
                    <p> <img src="../assets/military_tech.svg">
                        <select v-if="selectedlol" class="col2">
                            <option value="" selected>Rank</option>
                            <option value="Unranked">Unranked</option>
                            <option value="Iron">Iron</option>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Challenger">Challenger</option>
                        </select>
                    </p>
                </div>
            </div>
            <div class="rocket game">
                <div class="gameimage">
                    <img src="../assets/rocket.svg" height="50px" width="50px" alt="game image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select class="col1">
                            <option value="">Region</option>
                            <option value="America">America</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Middle East">Middle East</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                        </select>
                    </p>
                    <p> <img src="../assets/military_tech.svg">
                        <select class="col2">
                            <option value="" selected>Rank</option>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Champion">Champion</option>
                            <option value="Grand Champion">Grand Champion</option>
                            <option value="Supersonic Legend (SSL)">Supersonic Legend (SSL)</option>
                        </select>
                    </p>
                    <p> <img src="../assets/sports_esports.svg">
                        <select class="col1">
                            <option value="">Mode</option>
                            <option value="Ranked - Solo">Ranked - Solo</option>
                            <option value="Ranked - Duo">Ranked - Duo</option>
                            <option value="Ranked - Trio">Ranked - Trio</option>
                            <option value="Unranked - Solo">Unranked - Solo</option>
                            <option value="Unranked - Duo">Unranked - Duo</option>
                            <option value="Unranked - Trio">Unranked - Trio</option>
                            <option value="Unranked - Quad">Unranked - Quad</option>
                        </select>
                    </p>
                </div>
            </div>
            <div class="valorant game">
                <div class="gameimage">
                    <img src="../assets/valorant.svg" alt="game image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select class="col1">
                            <option value="">Server</option>
                            <option value="Brazil">Brazil</option>
                            <option value="North America">North America</option>
                            <option value="LATAM">LATAM</option>
                            <option value="Asia-Pacific">Asia-Pacific</option>
                            <option value="Europe">Europe</option>
                            <option value="Korea">Korea</option>
                        </select>
                    </p>
                    <p> <img src="../assets/extension.svg">
                        <select class="col2">
                            <option value="">Role</option>
                            <option value="Duelist">Duelist</option>
                            <option value="Initiator">Initiator</option>
                            <option value="Sentinel">Sentinel</option>
                            <option value="Controller">Controller</option>
                        </select>
                    </p>
                    <p> <img src="../assets/military_tech.svg">
                        <select class="col1">
                            <option value="">Rank</option>
                            <option value="Unranked">Unranked</option>
                            <option value="Iron">Iron</option>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Immortal">Immortal</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "intro",
    data() {
        return {
            userId: this.$route.query.id,
            selectedlol:false,
            selectedrocket:false,
            selectedvalorant:false,
        };
    },
    methods: {
        async requestfromserver(addr) {
            this.isloading = true;
            console.log("addr5:", addr);
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
        console.log("userId:", this.userId);
        var res= await this.requestfromserver("https://backend-project-vzn7.onrender.com/matchingpage/" + this.userId);
        console.log("res2:", res);
        this.chosenGame = res.VAL;
    },

};

</script>


<style scoped>
.introcontent {
    margin-left: 120px;
    margin-right: 30px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    border: 1px solid var(--stroke);
    border-radius: 15px;
    z-index: 0;
    padding: 15px;
}

.introcontent h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin: 0;
    margin-top: 15px;
    margin-left: 15px;

}

.col1 {
    font-size: 14px;
    line-height: 21px;
    width: 200px;
    height: 100%;
    padding-right: 35px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.col2 {
    font-size: 14px;
    line-height: 21px;
    width: 130px;
    height: 100%;
    padding-right: 35px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;

}

.introcontent h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin: 0;
    margin: 15px;

}

.favoritegamedetails {
    display: flex;
    flex-direction: column;
}

.game {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid var(--stroke);
    padding: 15px;

}

.game:last-child {
    border-bottom: none;
}

.gamedetails {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
}


.gameimage {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--stroke);
    width: 116.87px;
    height: 60.1px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 15px;
}

.gameimage img {
    width: 50px;
    height: 50px;
}

.gamedetails p {
    width: max-content;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.gamedetails p img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    fill: blue;
    
}

.BW {
    filter: grayscale(100%);
    transition: 0.4s;
    cursor: pointer;
} 

.BW:hover {
    filter: grayscale(0%);
}

</style>
