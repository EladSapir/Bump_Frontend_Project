<template>
    <header class="main-header">
      <nav class="nav-menu">
        <ul class="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    methods: {
        
    },
  };
  </script>
  
  <style scoped>
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 70px;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-menu {
    display: flex;
  }
  
  .nav-items {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-items li {
    margin-left: 20px;
  }
  
  .nav-items li:first-child {
    margin-left: 0;
  }
  
  .nav-items li a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .nav-items li a:hover {
    color: #f39c12;
  }
  </style>
  