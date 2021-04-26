import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: {
  //     default: Home
  //   }
  // },
  // {
  //   path: "/",
  //   name: "About",
  //   components: About
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
