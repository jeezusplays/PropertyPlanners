import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginView from "../views/LoginView.vue";
import BasicView from "../views/BasicView.vue";
import DashboardView from "../views/DashboardView.vue";
import Agent_Dashboard from "../components/agent/Agent_Dashboard.vue"
import Chat from "../components/common/Chat.vue"
import Seeker_Profile from "../components/seeker/Seeker_Profile.vue"

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
          component: LandingPage
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
          component: Agent_Dashboard
        },
        {
          path: "chat",
          name: "chat",
          component: Chat
        },
        {
          path: "findagent",
          name: "findagent",
          component: LandingPage
        },
        {
          path: "favourites",
          name: "favourites",
          component: LandingPage
        },
        {
          path: "profile",
          name: "profile",
          component: Seeker_Profile
        },
        {
          path: "region",
          name: "region",
          component: LandingPage
        },
        {
          path: "general",
          name: "general",
          component: LandingPage
        }

      ],
    },
  ],
});

export default router;
