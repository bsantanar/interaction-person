import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publications from '../views/Publications.vue'
import Contact from '../views/Contact.vue'
import Activities from '../views/Activities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/portfolio',
    name: 'Activities',
    component: Activities
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
