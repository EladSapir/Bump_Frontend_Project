<template>
        <div class="container">
            <h2>Nothing here<img src="../assets/emoji.svg" alt=""></h2>
            <p>{{  emptymessage }}</p>
        </div>
  
</template>

<script>
export default {
    data() {
        return {
            closehover: true,
        }
    },
    props:['emptymessage'],
    mounted() {
    window.addEventListener("scroll", this.preventScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.preventScroll);
  },
    methods: {
        closeempty() {
            window.removeEventListener("scroll", this.preventScroll);
            this.$emit('closee')
        },
        preventScroll(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    },
    }
}

</script>

<style scoped>
.container {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1B1E29;
    border: 1px solid var(--stroke);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}



h2 img{
    position: relative;
    top:8px;
    left:5px;
}


.container h2 {
    position: relative;
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;

}

.container p {
    color: var(--white);
    text-align: center;
    margin-bottom: 15px;
    width:80%;
}


</style>