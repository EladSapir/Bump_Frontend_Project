<template>
    <div class="main-container">
        <div class="footer">
            <div class="left">
                <p class="addunderline" @click="openAbout">About</p>
                <p class="addunderline" @click="openTerms">Terms and Conditions</p>
                <p class="addunderlinewithoutpointer">Contact us: BUMP@gmail.com</p>
            </div>

            <div class="right">
                <p class="addunderlinewithoutpointer">Copyright © 2023 BUMP. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Footer',
    methods: {
        openAbout() {
            this.$emit('openA')
        },
        openTerms() {
            this.$emit('openT')
        }
    }
}
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
}

p {
    margin: 0 0;
}

.footer {
    display: flex;
    justify-content: space-between;
    background: var(--pagebgcolor);
    border-radius: 25px 25px 0px 0px;
    border-top: 1px solid var(--footer);
    padding: 10px 50px;
    box-sizing: border-box;
    margin-top: auto;
    flex-shrink: 0;
    width: 100%;
}

.left {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: flex-start;
}

.addunderline:hover {
    text-decoration: underline;
    text-decoration-color: var(--main);
    text-decoration-thickness: 1.5px;
    cursor: pointer;
}

.addunderlinewithoutpointer:hover {
    text-decoration-color: var(--main);
    text-decoration-thickness: 1.5px;
}

.right {
    display: flex;
    padding-left: 30px;
    justify-content: flex-end;
}
</style>