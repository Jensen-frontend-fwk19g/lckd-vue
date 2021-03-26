import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/passwords',
    name: 'Passwords',
    component: () => import('../views/Passwords.vue')
  },
  {
    path: '/new',
    name: 'NewLCKD',
    component: () => import('../views/NewLCKD.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
