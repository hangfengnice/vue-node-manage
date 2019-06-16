import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Register from './views/register.vue'
import Login from './views/login.vue'

import NotFound from './views/404.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path: '/',
     redirect: "/index"
   },
   {
     path: '/index',
     name: "index",
     component: Index
   },
   {
     path: '/register',
     name:'register',
     component: Register
   },
   {
    path: '/login',
    name:'login',
    component: Login
  },
   {
     path: '*',
     name: "404",
     component: NotFound
   }
  ]
})

router.beforeEach((to,from,next) => {
  const isLogin = localStorage.token ? true : false
  if(to.path == '/login' || to.path == '/registr'){
    next()
  }else{
    isLogin ? next() : next('/login')
  }
})
export default router
