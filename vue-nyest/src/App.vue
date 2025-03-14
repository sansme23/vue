<template>
  <div id="app">
    <!-- Importerede HeaderNav-komponenten -->
    <HeaderNav />
    <h1>Min første Vue applikation</h1>
  </div>
</template>

<script>
// Importer HeaderNav-komponenten
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav // Registrer HeaderNav som en komponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  color: #2c3e50;
  margin-top: 2em;
}
</style>

