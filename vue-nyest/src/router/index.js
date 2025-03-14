import { createRouter, createWebHistory } from 'vue-router'

// Importer de komponenter, du vil bruge til hver rute
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

// Definer dine ruter
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

// Opret routeren med historik
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
