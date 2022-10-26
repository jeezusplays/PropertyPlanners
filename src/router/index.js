import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import BasicView from "../views/BasicView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component:BasicView,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView
        },
        {
          path: "signup",
          name: "signup",
          component: LoginView
        },
        {
          path: "home",
          name: "home",
          component: HomeView
        },
      ],
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      children: [
        {
          path: "seeker",
          name: "seeker",
          component: HomeView
        },
      ],
    },
  ],
});

export default router;
