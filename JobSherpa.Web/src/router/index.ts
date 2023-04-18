// Imports
import { createRouter, createWebHistory } from "vue-router";
import store from "../store"; // Import the store

const routeInfos = [
  {
    path: "/dashboard",
    name: "userdashboard",
    component: () => import("../views/UserDashboard.vue"),
  },
  {
    path: "/",
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
    path: "/logout",
    name: "logout",
    component: () => import("../views/Logout.vue"),
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (
    to.name !== "login" &&
    to.name !== "register" &&
    to.name !== "home" &&
    to.name !== "about" &&
    !isAuthenticated
  ) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
