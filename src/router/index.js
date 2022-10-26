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
      path: "/seeker",
      name: "seeker",
      component: DashboardView,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: HomeView
        },
        {
          path: "chat",
          name: "chat",
          component: LoginView
        },
        {
          path: "findagent",
          name: "findagent",
          component: HomeView
        },
        {
          path: "favourites",
          name: "favourites",
          component: HomeView
        },
        {
          path: "profile",
          name: "profile",
          component: HomeView
        },
        {
          path: "region",
          name: "region",
          component: HomeView
        },
        {
          path: "general",
          name: "general",
          component: HomeView
        }

      ],
    },
  ],
});

export default router;
