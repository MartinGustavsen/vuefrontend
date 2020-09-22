import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Register from '../components/auth/Register.vue' 

Vue.use(VueRouter,VueAxios, axios)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },   
   {
    path: '/Register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
