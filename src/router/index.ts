import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
];

console.log(process.env.BASE_URL);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
