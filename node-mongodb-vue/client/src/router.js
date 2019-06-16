import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Register from './views/register.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
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
     path: '*',
     name: "404",
     component: NotFound
   }
  ]
})
