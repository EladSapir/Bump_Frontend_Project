<template>
    <transition name="fade">
        <div v-if="show" class="container">
            <img loop src="../assets/matchgif.gif" >
            <button class="btn"  @click="close"> {{ confirmtxt[Math.floor(Math.random() * confirmtxt.length)] }} </button>
        </div>
    </transition>
</template>
  
<script>
export default {
    name: 'matchfound',
    data() {
        return {
            closehover: true,
            show: false,
            confirmtxt:['Great!', 'Awesome!', 'Nice!', 'Cool!', 'Amazing!', 'Fantastic!', 'Wonderful!', 'Incredible!', 'Unbelievable!', 'Super!', 'Excellent!', 'Perfect!', 'Good!', 'Spectacular!', 'Stupendous!', 'Terrific!', 'Tremendous!', 'Phenomenal!', 'Astonishing!', 'Extraordinary!', 'Stunning!', 'Impressive!', 'Mind-blowing!']
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
    mounted() {
        // Show the component with a delay to allow for transition effect
        setTimeout(() => {
            this.show = true;
        }, 100);
    },
}
</script>
  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.3s;
}

.fade-enter,
.fade-leave-to {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
}

.container {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    top: 40%;
    left: 50%;
    margin-top: 90px;
    transform: translate(-50%, -50%) scale(1);
}

.container img {
    width: 100%;
    height: 100%;
}

.btn {
   padding:10px 50px;
   transition: opacity 0.5s ease-in-out;

}

.btn:hover {
    background-color: var(--hovercolor);
    border: 1px solid var(--text);
}


</style>
  