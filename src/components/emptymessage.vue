<template>
    <div class="container" :class="{ home: ishome }">
        <h2>Nothing here<img src="../assets/emoji.svg" alt=""></h2>
        <p>{{ emptymessage }}</p>
    </div>
</template>

<script>
export default {

    name: 'emptymsg',
    props: ['emptymessage', 'ishome'],

}

</script>

<style scoped>
.container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    left: 50%;
    margin-top: 90px;
    transform: translate(-50%, -50%);
    background: #1B1E29;
    border: 1px solid var(--stroke);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}

.container.home {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



h2 img {
    position: relative;
    top: 8px;
    left: 5px;
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
    width: 80%;
}
</style>