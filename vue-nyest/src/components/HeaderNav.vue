<template>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderNav'
  }
  </script>
  
  <style scoped>
  header {
    background-color: #115f46;
    padding: 10px;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  