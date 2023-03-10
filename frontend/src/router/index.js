import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddEvent from '../views/AddEvent.vue'
import Events from '../views/Events.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/events',
    name:'events',
    component: Events
  },
  {
    path: '/event/:id',
    name:'event',
    component: Event,
    props: true
  },
  {
    path: '/about',
    name:'about',
    component: About
  },
  {
    path: '/add-event',
    name:'add-event',
    component: AddEvent
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
