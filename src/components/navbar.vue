<template>
  <header class="main-header">
    <nav class="nav-menu">
      <div class="nav-left">
        <a href="#" class="logo"><img src="../../public/Logo1.svg" alt="Logo"></a>
        <a href="#" class="BUMP">BUMP</a>
        <a href="#" class="profile-link">My Profile</a>
      </div>
      <div class="nav-center">
        <form action="#">
          <input type="text" placeholder="Search..." class="search">
        </form>
      </div>
      <div class="nav-right">
        <button class="btn">Lets Bump</button>
        <img class="noti" src="../assets/noti_off.svg" alt="Notifications">
        <img class="logout" src="../assets/logout.svg" alt="Logout">
      </div>
    </nav>
  </header>
</template>
  
<script>
export default {
  name: "navbar",
  methods: {

  },
};
</script>
  
<style scoped>
.main-header {
  background-color: var(--background);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
}

.nav-menu {
  display: flex;
  width: 100%;
  padding: 0 30px;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

.nav-left {
  flex: 1;
}

.nav-right {
  flex: 1;
  justify-content: flex-end;
}

.logo {
  display: flex;
  height: 60px;
  width: 60px;
  margin-right: 20px;
}

.search {
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
}

.profile-link {
  color: var(--white);
  text-decoration: none;
  margin-right: 20px;
}

.noti {
  margin-right: 20px;
  height: 20px;
  width: 20px;
}

.logout {
  margin-right: 20px;
  height: 20px;
  width: 20px;
}

.btn {
  margin-right: 20px;
  padding: 10px 20px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
}
</style>
  