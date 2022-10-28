import { createRouter, createWebHistory } from "vue-router";

// Views
import BasicView from "../views/BasicView.vue";
import DashboardView from "../views/DashboardView.vue";

// Top level Component
import LoginView from "../components/Login.vue";

// Agent
import AgentDashboard from "../components/agent/AgentDashboard.vue";
import AgentProfile from "../components/agent/AgentProfile.vue";

// Common
import Chat from "../components/common/Chat.vue";

// Landing
import LandingPage from "../components/landing/LandingPage.vue";

// Seeker
import SeekerProfile from "../components/seeker/SeekerProfile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/main",
      name: "main",
      component: BasicView,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
        },
        {
          path: "signup",
          name: "signup",
          component: LoginView,
        },
        {
          path: "home",
          name: "home",
          component: LandingPage,
        },
      ],
    },
    {
      path: "/agent",
      name: "agent",
      component: DashboardView,
      children: [
        {
          path: "dashboard",
          name: "agent-dashboard",
          component: AgentDashboard,
        },
        {
          path: "chat",
          name: "agent-chat",
          component: Chat,
        },
        {
          path: "profile",
          name: "agent-profile",
          component: AgentProfile,
        },
        {
          path: "region",
          name: "agent-region",
          component: LandingPage,
        },
        {
          path: "general",
          name: "agent-general",
          component: LandingPage,
        }
      ]
    },
    {
      path: "/seeker",
      name: "seeker",
      component: DashboardView,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: AgentDashboard,
        },
        {
          path: "chat",
          name: "chat",
          component: Chat,
        },
        {
          path: "findagent",
          name: "findagent",
          component: LandingPage,
        },
        {
          path: "favourites",
          name: "favourites",
          component: LandingPage,
        },
        {
          path: "profile",
          name: "profile",
          component: SeekerProfile,
        },
        {
          path: "region",
          name: "region",
          component: LandingPage,
        },
        {
          path: "general",
          name: "general",
          component: LandingPage,
        }
      ]
    }
  ]
});

export default router;
