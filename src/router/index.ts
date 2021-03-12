import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Example01",
    name: "Example01",
    component: ()=>import("@/views/main/example01/Example01.vue")
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
