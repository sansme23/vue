import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importer routeren

createApp(App)
  .use(router) // Brug routeren
  .mount('#app')
