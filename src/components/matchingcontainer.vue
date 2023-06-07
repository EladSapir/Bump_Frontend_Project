<template>
    <div class="matchingcontainer">
        <h2>Choose Game</h2>
        <div class="gamesselectrow">
            <div class="gamebox" :class="{ selected: selectedlol }" @click="changechoice(1)">
                <img :class="{ BW: !selectedlol }" src="../assets/lol.svg" alt="lol" class="gameicon" />

            </div>
            <div class="gamebox" :class="{ selected: selectedrocket }" @click="changechoice(2)">
                <img :class="{ BW: !selectedrocket }" src="../assets/rocket.svg" alt="Rocket League" class="gameicon" />

            </div>
            <div class="gamebox" :class="{ selected: selectedvalorant }" @click="changechoice(3)">
                <img :class="{ BW: !selectedvalorant }" src="../assets/valorant.svg" alt="valorant" class="gameicon" />

            </div>
        </div>
        <div class="playerinforow" v-if="selectedlol">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <select v-if="selectedlol" v-model="region" class="col1">
                        <option value="N/A" disabled selected>Region</option>
                        <option value="North America">North America</option>
                        <option value="Europe West">Europe West</option>
                        <option value="Europe Nordic & East">Europe Nordic & East</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <select v-if="selectedlol" v-model="role" class="col1">
                        <option value="N/A" disabled selected>Role</option>
                        <option value="Top">Top</option>
                        <option value="Mid">Mid</option>
                        <option value="ADC">ADC</option>
                        <option value="Support">Support</option>
                        <option value="Jungle">Jungle</option>
                    </select>
                </div>
            </div>
            <div class="div3">
                <div class="setting">
                    <select v-if="selectedlol" v-model="mode" class="col2">
                        <option value="N/A" disabled selected>Mode</option>
                        <option value="Normal">Normal</option>
                        <option value="Draft">Draft</option>
                        <option value="Duo">Duo</option>
                        <option value="ARAM">ARAM</option>
                    </select>
                </div>
            </div>
            <div class="div4">
                <div class="setting">
                    <select v-if="selectedlol" v-model="rank" class="col2">
                        <option value="N/A" disabled selected>Rank</option>
                        <option value="Unranked">Unranked</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Challenger">Challenger</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="playerinforow" v-if="selectedrocket">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <select v-if="selectedrocket" v-model="region" class="col1">
                        <option value="N/A" disabled selected>Region</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <select v-if="selectedrocket" v-model="mode" class="col1">
                        <option value="N/A" disabled selected>Mode</option>
                        <option value="Ranked - Solo">Ranked - Solo</option>
                        <option value="Ranked - Duo">Ranked - Duo</option>
                        <option value="Ranked - Trio">Ranked - Trio</option>
                        <option value="Unranked - Solo">Unranked - Solo</option>
                        <option value="Unranked - Duo">Unranked - Duo</option>
                        <option value="Unranked - Trio">Unranked - Trio</option>
                        <option value="Unranked - Quad">Unranked - Quad</option>
                    </select>
                </div>
            </div>
            <div class="div5">
                <div class="setting">
                    <select v-if="selectedrocket" v-model="rank" class="col2">
                        <option value="N/A" disabled selected>Rank</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Champion">Champion</option>
                        <option value="Grand Champion">Grand Champion</option>
                        <option value="Supersonic Legend (SSL)">Supersonic Legend (SSL)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="playerinforow" v-if="selectedvalorant">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <select v-if="selectedvalorant" v-model="server" class="col1">
                        <option value="N/A" disabled selected>Server</option>
                        <option value="Brazil">Brazil</option>
                        <option value="North America">North America</option>
                        <option value="LATAM">LATAM</option>
                        <option value="Asia-Pacific">Asia-Pacific</option>
                        <option value="Europe">Europe</option>
                        <option value="Korea">Korea</option>
                    </select>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <select v-if="selectedvalorant" v-model="role" class="col2">
                        <option value="N/A" disabled selected>Role</option>
                        <option value="Duelist">Duelist</option>
                        <option value="Initiator">Initiator</option>
                        <option value="Sentinel">Sentinel</option>
                        <option value="Controller">Controller</option>
                    </select>
                </div>
            </div>
            <div class="div5">
                <div class="setting">
                    <select v-if="selectedvalorant" v-model="rank" class="col1">
                        <option value="N/A" disabled selected>Rank</option>
                        <option value="Unranked">Unranked</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Immortal">Immortal</option>
                    </select>
                </div>
            </div>
        </div>


        <div class="propertiesrow">
            <div class="div1">
                <p class="title">Country</p>
                <div class="setting">
                    <select>
                        <option value=" " disabled selected>Select a country</option>
                        <option value="Israel">Israel</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="India">India</option>
                    </select>
                </div>
            </div>
            <div class="div2">
                <p class="title">Language</p>
                <div class="setting">
                    <select>
                        <option value=" " disabled selected>Select a language</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Hindi">Hindi</option>
                    </select>
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
            VAL: { Server: 'N/A', Role: 'N/A', Rank: 'N/A' },
            RL: { Region: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            LOL: { Region: 'N/A', Role: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            selectedvalorant: false,
            selectedlol: true,
            selectedrocket: false,
            region: "N/A",
            role: "N/A",
            rank: "N/A",
            mode: "N/A",
            server: "N/A",
            country: "N/A",
            language: "N/A",
            userID: '',
            country1: '',
            language1: '',

        };
    },
    methods: {
        async findPartner() {
            var game1;
            var game2;
            var game3;
            var game4;
            var game5;
            var i;
            if (this.selectedlol === true)
                i = 0;
            else if (this.selectedrocket === true)
                i = 1;
            else if (this.selectedvalorant === true)
                i = 2;
            switch (i) {
                case 1:
                    if (this.region === "N/A" || this.rank === "N/A" || this.mode === "N/A") {
                        alert("Please fill all the fields");
                        return;
                    }
                    game1 = '1';
                    game2 = this.region;
                    game3 = this.mode;
                    game4 = this.rank;
                    game5 = null;
                    this.selectedrocket = false;
                    this.RL = { Region: this.region, Mode: this.mode, Rank: this.rank }
                    break;
                case 0:
                    if (this.region === "N/A" || this.role === "N/A" || this.rank === "N/A" || this.mode === "N/A") {
                        alert("Please fill all the fields");
                        return;
                    }
                    game1 = '0';
                    game2 = this.region;
                    game3 = this.mode;
                    game4 = this.role;
                    game5 = this.rank;
                    this.selectedlol = false;
                    this.LOL = { Region: this.region, Role: this.role, Mode: this.mode, Rank: this.rank }
                    break;
                case 2:
                    if (this.server === "N/A" || this.role === "N/A" || this.rank === "N/A") {
                        alert("Please fill all the fields");
                        return;
                    }
                    game1 = '2';
                    game2 = this.server;
                    game3 = this.rank;
                    game4 = this.role;
                    game5 = null;
                    this.selectedvalorant = false;
                    this.VAL = { Server: this.server, Role: this.role, Rank: this.rank }
                    break;
            }
            var addr = 'https://backend-project-vzn7.onrender.com/submitmatchingdetails';
            var data = {
                userId: this.userID,
                language1: 'Hebrew',
                country1: 'Israel',
                language2: this.language,
                country2: this.country,
                game1: game1,
                game2: game2,
                game3: game3,
                game4: game4,
                game5: game5,
            }
            console.log(" before findPartner");
            var res = await this.requestfromserverpost(addr, data);
            console.log("res from findPartner:", res);
            this.$emit('partners', res);
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
        changechoice(i) {
            if (i === 1) {
                this.selectedlol = true;
                this.selectedrocket = false;
                this.selectedvalorant = false;
                if (this.LOL) {
                    this.region = this.LOL.Region;
                    this.role = this.LOL.Role;
                    this.rank = this.LOL.Rank;
                    this.mode = this.LOL.Mode;
                }
                else {
                    this.region = "N/A";
                    this.role = "N/A";
                    this.rank = "N/A";
                    this.mode = "N/A";
                }
            }
            else if (i === 2) {
                this.selectedlol = false;
                this.selectedrocket = true;
                this.selectedvalorant = false;
                if (this.RL) {
                    this.region = this.RL.Region;
                    this.rank = this.RL.Rank;
                    this.mode = this.RL.Mode;
                }
                else {
                    this.region = "N/A";
                    this.rank = "N/A";
                    this.mode = "N/A";
                }
            }
            else if (i === 3) {
                this.selectedlol = false;
                this.selectedrocket = false;
                this.selectedvalorant = true;
                if (this.VAL) {
                    this.server = this.VAL.Server;
                    this.role = this.VAL.Role;
                    this.rank = this.VAL.Rank;
                }
                else {
                    this.server = "N/A";
                    this.role = "N/A";
                    this.rank = "N/A";
                }
            }

        }
    },
    async created() {
        this.userID = this.$route.query.id;
        console.log("userID:", this.userID);
        let addr = 'https://backend-project-vzn7.onrender.com/matchingpage/' + this.userID;
        var res = await this.requestfromserver(addr);
        this.country = res.Country;
        this.language = res.Language;
        if (res.LOL) {
            this.LOL = res.LOL;
            this.region = this.LOL.Region;
            this.role = this.LOL.Role;
            this.rank = this.LOL.Rank;
            this.mode = this.LOL.Mode;
        }
        else {
            this.LOL = { Region: 'N/A', Role: 'N/A', Mode: 'N/A', Rank: 'N/A' };
        }
        if (res.RL) {
            this.RL = res.RL;
        }
        else {
            this.RL = { Region: 'N/A', Mode: 'N/A', Rank: 'N/A' };
        }
        if (res.VAL) {
            this.VAL = res.VAL;
        }
        else {
            this.VAL = { Server: 'N/A', Role: 'N/A', Rank: 'N/A' };
        }
        this.language1 = res.Language;
        this.country1 = res.Country;
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
    background-color: var(--background);

}

.selected {
    border: 2px solid var(--main);
    background-color: var(--pagebgcolor);
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

.div5 {
    grid-area: 2 / 1 / 3 / 3;
}

.setting {
    width: 254px;
    height: 43px;
    border: 1px solid var(--stroke);
    background-color: var(--white);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.setting:hover {
    border: 1px solid var(--main);
}



select:hover {
    border: none;
}

.div5 select {
    width: 100%;
}

.div5 .setting {
    width: 100%;
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
  