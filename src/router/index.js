import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import demo1 from "../views/Information.vue"
import demo2 from "../views/Demo2.vue"
import demo3 from "../views/Demo3.vue"
import demo4 from "../views/Demo4.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/demo1",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: demo1
  },
  {
    path: "/demo2",
    name: "Demo2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: demo2
  },
  {
    path: "/demo3",
    name: "Demo3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: demo3
  },
  {
    path: "/demo4",
    name: "Demo4",
    component: demo4
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
