<template>
    <div class="introcontent">
        <h2>Intro</h2>
        <h3>Favorite Games</h3>
        <div class="favoritegamedetails">
            <div class="league game" @click.self="changechoice(1)">
                <div class="gameimage" @click="changechoice(1)">
                    <img :class="{ BW: !selectedlol }" class="gamelogo" src="../assets/lol.svg" alt="game-image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select v-if="selectedlol" v-model="region" class="col1">
                            <option value="N/A" disabled selected>Region</option>
                            <option value="North America">North America</option>
                            <option value="Europe West">Europe West</option>
                            <option value="Europe Nordic & East">Europe Nordic & East</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    <p v-else>{{ LOL.Region }}</p>
                    </p>
                    <p> <img src="../assets/extension.svg">
                        <select v-if="selectedlol" v-model="mode" class="col2">
                            <option value="N/A" disabled selected>Mode</option>
                            <option value="Normal">Normal</option>
                            <option value="Draft">Draft</option>
                            <option value="Duo">Duo</option>
                            <option value="ARAM">ARAM</option>
                        </select>
                    <p v-else>{{ LOL.Mode }}</p>
                    </p>
                    <p> <img src="../assets/sports_esports.svg">
                        <select v-if="selectedlol" v-model="role" class="col1">
                            <option value="N/A" disabled selected>Role</option>
                            <option value="Top">Top</option>
                            <option value="Mid">Mid</option>
                            <option value="ADC">ADC</option>
                            <option value="Support">Support</option>
                            <option value="Jungle">Jungle</option>
                        </select>
                    <p v-else>{{ LOL.Role }}</p>
                    </p>
                    <p> <img src="../assets/military_tech.svg">
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
                    <p v-else>{{ LOL.Rank }}</p>
                    </p>
                </div>
                <div v-if="selectedlol" class="check" @click="sumbitgame(0)"><img src="../assets/check_circle_green.svg">
                </div>
            </div>
            <div class="rocket game" @click.self="changechoice(2)">
                <div class="gameimage" @click="changechoice(2)">
                    <img :class="{ BW: !selectedrocket }" src="../assets/rocket.svg" height="50px" width="50px"
                        alt="game image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select v-if="selectedrocket" v-model="region" class="col1">
                            <option value="N/A" disabled selected>Region</option>
                            <option value="America">America</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Middle East">Middle East</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                        </select>
                    <p v-else>{{ RL.Region }}</p>

                    </p>
                    <p> <img src="../assets/military_tech.svg">
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
                    <p v-else>{{ RL.Rank }}</p>

                    </p>
                    <p> <img src="../assets/sports_esports.svg">
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
                    <p v-else>{{ RL.Mode }}</p>

                    </p>
                </div>
                <div v-if="selectedrocket" class="check" @click="sumbitgame(1)"><img src="../assets/check_circle_green.svg">
                </div>
            </div>
            <div class="valorant game" @click.self="changechoice(3)">
                <div class="gameimage" @click="changechoice(3)">
                    <img :class="{ BW: !selectedvalorant }" src="../assets/valorant.svg" alt="game image" />
                </div>
                <div class="gamedetails">
                    <p> <img src="../assets/south_america.svg">
                        <select v-if="selectedvalorant" v-model="server" class="col1">
                            <option value="N/A" disabled selected>Server</option>
                            <option value="Brazil">Brazil</option>
                            <option value="North America">North America</option>
                            <option value="LATAM">LATAM</option>
                            <option value="Asia-Pacific">Asia-Pacific</option>
                            <option value="Europe">Europe</option>
                            <option value="Korea">Korea</option>
                        </select>
                    <p v-else>{{ VAL.Server }}</p>

                    </p>
                    <p> <img src="../assets/extension.svg">
                        <select v-if="selectedvalorant" v-model="role" class="col2">
                            <option value="N/A" disabled selected>Role</option>
                            <option value="Duelist">Duelist</option>
                            <option value="Initiator">Initiator</option>
                            <option value="Sentinel">Sentinel</option>
                            <option value="Controller">Controller</option>
                        </select>
                    <p v-else>{{ VAL.Role }}</p>

                    </p>
                    <p> <img src="../assets/military_tech.svg">
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
                    <p v-else>{{ VAL.Rank }}</p>

                    </p>
                </div>
                <div v-if="selectedvalorant" class="check" @click="sumbitgame(2)"><img
                        src="../assets/check_circle_green.svg"></div>
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
            selectedlol: true,
            selectedrocket: false,
            selectedvalorant: false,
            VAL: { Server: 'N/A', Role: 'N/A', Rank: 'N/A' },
            RL: { Region: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            LOL: { Region: 'N/A', Role: 'N/A', Mode: 'N/A', Rank: 'N/A' },
            server: "N/A",
            role: "N/A",
            rank: "N/A",
            mode: "N/A",
            region: "N/A",
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
        sumbitgame(i) {
            var game1;
            var game2;
            var game3;
            var game4;
            var game5;
            console.log("sumbitgame");
            console.log("region:", this.region);
            console.log("role:", this.role);
            console.log("rank:", this.rank);
            console.log("mode:", this.mode);
            console.log("server:", this.server);
            switch (i) {
                case 1:
                    if(this.region === "N/A" || this.rank === "N/A" || this.mode === "N/A"){
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
                    if(this.region === "N/A" || this.role === "N/A" || this.rank === "N/A" || this.mode === "N/A"){
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
                    if(this.server === "N/A" || this.role === "N/A" || this.rank === "N/A"){
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

            var data = {
                userID: this.userId,
                newPass: "",
                gamerTag: "",
                game1: game1,
                game2: game2,
                game3: game3,
                game4: game4,
                game5: game5,
            };
            var addr = "https://backend-project-vzn7.onrender.com/editprofile";
            this.requestfromserverpost(addr, data);



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
        console.log("userId:", this.userId);
        var res = await this.requestfromserver("https://backend-project-vzn7.onrender.com/matchingpage/" + this.userId);
        console.log("res2:", res);
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
    cursor: pointer;
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
    padding: 0 30px;
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
    cursor: pointer;
}

.gamedetails p img {
    margin-right: 5px;
    width: 20px;
    height: 20px;

}

.BW {
    filter: grayscale(100%);
    transition: 0.4s;
    cursor: pointer;
}

.BW:hover {
    filter: grayscale(0%);
}

.check {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
