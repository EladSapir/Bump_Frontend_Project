<template>
    <div class="matchingcontainer">
        <h2>Your Game Settings</h2>
        <div class="gamesselectrow">
            <div class="gameboxandedit">
                <div class="gamebox" :class="{ selected: selectedlol }" @click="changechoice(1)">
                    <img :class="{ BW: !selectedlol }" src="../assets/lol.svg" alt="lol" class="gameicon" />
                </div>
                <span @click="movetomyprofile"> Edit Your Settings</span>
            </div>
            <div class="gameboxandedit">
                <div class="gamebox" :class="{ selected: selectedrocket }" @click="changechoice(2)">
                    <img :class="{ BW: !selectedrocket }" src="../assets/rocket.svg" alt="Rocket League" class="gameicon" />
                </div>
                <span @click="movetomyprofile"> Edit Your Settings</span>
            </div>
            <div class="gameboxandedit">
                <div class="gamebox" :class="{ selected: selectedvalorant }" @click="changechoice(3)">
                    <img :class="{ BW: !selectedvalorant }" src="../assets/valorant.svg" alt="valorant" class="gameicon" />
                </div>
                <span @click="movetomyprofile"> Edit Your Settings</span>
            </div>
        </div>
        <div class="playerinforow" v-if="selectedlol">
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

        <div class="playerinforow" v-if="selectedvalorant || selectedrocket">
            <div class="div1">
                <p class="title">Match Info</p>
                <div class="setting">
                    <p v-if="selectedvalorant">{{ VAL.Server }}</p>
                    <p v-else>{{ RL.Region }}</p>
                </div>
            </div>
            <div class="div2">
                <p class="title">Player Info</p>
                <div class="setting">
                    <p v-if="selectedvalorant">{{ VAL.Role }}</p>
                    <p v-else>{{ RL.Mode }}</p>
                </div>
            </div>
            <div class="div5">
                <div class="setting">
                    <p v-if="selectedvalorant">{{ VAL.Rank }}</p>
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

        };
    },
    methods: {
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
            this.$emit('changechoice', i);
        },
        movetomyprofile() {
            this.$router.push({ name: 'profile', query: { id: this.userID }, params: { differentUserId: this.userID } });
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

.gameboxandedit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.gameboxandedit span {
    font-size: 13px;
    margin-top: 2px;
    color: var(--white);
    font-weight: 200;
    text-align: center;
    width: 120px;
    transition: 0.2s;
    cursor: pointer;
}

.gameboxandedit span:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);

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
    width: 239px;
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
    width: 520px;
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
  