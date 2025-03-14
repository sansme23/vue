<template>
  <div id="app">
    <!-- HeaderNav-komponenten er nu tilføjet -->
    <HeaderNav />
    
    <!-- Dette er stedet, hvor undersiderne vil blive rendere -->
    <router-view />
    
    <!-- Footer-komponenten -->
    <Footer />
  </div>
</template>

<script>
// Importer HeaderNav og Footer-komponenterne
import HeaderNav from './components/HeaderNav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,  // Importer HeaderNav-komponenten
    Footer      // Importer Footer-komponenten
  }
}
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
