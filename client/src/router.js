import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Register from "./views/register.vue";
import Login from "./views/login.vue";
import Home from "./views/Home.vue";
import InfoShow from "./views/InfoShow.vue";
import FundList from "./views/fundList.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        { path: "", name: "/", component: Home },
        { path: "/home", name: "home", component: Home },
        { path: "/infoshow", name: "infoshow", component: InfoShow },
        { path: "/fundlist", name: "fundlist", component: FundList }
      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "*",
      component: Index
    }
  ]
});

// 路由守卫

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
