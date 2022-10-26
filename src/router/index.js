import { createRouter, createWebHistory } from "vue-router";

// Views
import BasicView from "../views/BasicView.vue";
import DashboardView from "../views/DashboardView.vue";

// Top level Component
import LoginView from "../components/Login.vue";

// Agent
import Agent_Dashboard from "../components/agent/Agent_Dashboard.vue"

// Common
import Chat from "../components/common/Chat.vue"

// Landing
import LandingPage from "../components/landing/LandingPage.vue";

// Seeker
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
