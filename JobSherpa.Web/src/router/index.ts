// Composables
import { createRouter, createWebHistory } from "vue-router";

const routeInfos = [
  {
    path: "/",
    name: "userdashboard",
    component: () => import("../views/UserDashboard.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/job/:id",
    name: "job-details",
    component: () => import("../views/Job.vue"),
    props: true,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/TimelinePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
