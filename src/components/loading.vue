<template>
  <div class="loading-overlay">
    <div class="loading-container">
      <img src="../assets/fist_loading.svg" class="fist" />
      <img src="../assets/joystick_loading.svg" class="joystick" />
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--background);
  border-radius: 15px;
  border: 1px solid var(--stroke);
  transform: translate(-50%, -50%);
  width: 650px;
  height: 350px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
}

.fist,
.joystick {
  width: 100px;
  height: 100px;
  position: absolute;
}

.fist {
  left: -200px;
}

.joystick {
  margin-top: 38px;
  margin-left: 100px;
  left: -200px;
}

.fist {
  animation: move-fist 3s linear infinite;
}

.joystick {
  animation: move-joystick 3s linear infinite;
}

@keyframes move-fist {
  0% {
    transform: translateX(0px);
  }
  10% {
    transform: translateX(85px);
  }
  20% {
    transform: translateX(170px);
  }
  30% {
    transform: translateX(255px);
  }
  40% {
    transform: translateX(340px);
  }
  50% {
    transform: translateX(425px);
  }
  60% {
    transform: translateX(510px);
  }
  70% {
    transform: translateX(595px);
  }
  80% {
    transform: translateX(680px);
  }
  90% {
    transform: translateX(765px);
  }
  100% {
    transform: translateX(850px);
  }
}

@keyframes move-joystick {
  0% {
    transform: translateX(0px);
  }
  10% {
    transform: translateX(85px);
  }
  20% {
    transform: translateX(170px);
  }
  30% {
    transform: translateX(255px);
  }
  40% {
    transform: translateX(340px);
  }
  50% {
    transform: translateX(425px);
  }
  60% {
    transform: translateX(510px);
  }
  70% {
    transform: translateX(595px);
  }
  80% {
    transform: translateX(680px);
  }
  90% {
    transform: translateX(765px);
  }
  100% {
    transform: translateX(850px);
  }
}
</style>
