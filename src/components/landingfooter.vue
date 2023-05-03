<template>
    <div class="main-container">
        <div class="content">
        </div>
        <div class="footer">
            <div class="left">
                <p class="addunderline" @click="openAbout">About</p>
                <p class="addunderline" >Terms and Conditions</p>
            </div>
            <div class="center">
                <p>Contact us: BUMP@gmail.com</p>
            </div>
            <div class="right">
                <p>Copyright © 2023 BUMP. All rights
                    reserved.</p>
            </div>
        </div>
    </div>


</template>
  
<script>
export default {
    name: 'homeView',
    methods: {
        openAbout(){
            this.$emit('open')
        }
    }
}
</script>

<style scoped>

.main-container {
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
}

.footer {
    display: flex;
    justify-content: space-between;
    background: #2c394ba8;
    border-radius: 25px 25px 0px 0px;
    padding: 10px 50px;
    box-sizing: border-box;
    margin-top: auto;
    flex-shrink: 0;
}

.left {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: flex-start;
}
.addunderline:hover{
    text-decoration: underline;
    cursor: pointer;
}
.center {
    display: flex;
    justify-content: center;
}

.right {
    display: flex;
    justify-content: flex-end;
}

p {
    font-size: 12px;
    color: #FFFFFF;
    margin: 0 0;
}</style>