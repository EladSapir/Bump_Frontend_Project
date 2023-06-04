<template>
  <div class="loading-overlay">
    <div class="loading-container">
      <img class="logo" src="../../public/Logo1.svg" />
      <div class="hollow-dots-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hollow-dots-spinner,
.hollow-dots-spinner * {
  box-sizing: border-box;
}

.hollow-dots-spinner {
  height: 15px;
  width: calc(30px * 3);
}

.hollow-dots-spinner .dot {
  width: 15px;
  height: 15px;
  margin: 0 calc(15px / 2);
  border: calc(15px / 5) solid var(--main);
  border-radius: 50%;
  float: left;
  transform: scale(0);
  animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
}

.hollow-dots-spinner .dot:nth-child(1) {
  animation-delay: calc(300ms * 1);
}

.hollow-dots-spinner .dot:nth-child(2) {
  animation-delay: calc(300ms * 2);
}

.hollow-dots-spinner .dot:nth-child(3) {
  animation-delay: calc(300ms * 3);

}

@keyframes hollow-dots-spinner-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.loading-container {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 2;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  animation: loading 2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>
