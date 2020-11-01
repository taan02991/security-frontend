import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import CreatePost from '../views/CreatePost.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/post/create',
    name: 'CreatePost',
    component: CreatePost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const state = store.state as any
  const isAuthenticated = !!state.auth.token
  if (to.name === 'SignUp' || to.name === 'Login') {
    if (isAuthenticated) next({ name: 'Home' })
    else next()
  } else {
    if (isAuthenticated) next()
    else next({ name: 'Login' })
  }
})

export default router
