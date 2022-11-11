import { createRouter, createWebHistory } from "vue-router";

// Views
import BasicView from "../views/BasicView.vue";
import DashboardView from "../views/DashboardView.vue";

// Top level Component
import LoginView from "../components/Login.vue";
import SignupView from "../components/Signup.vue";

// Agent
import AgentDashboard from "../components/agent/AgentDashboard.vue";
import AgentProfile from "../components/agent/AgentProfile.vue";
import Payment from "../views/PaymentPage.vue";

// Common
import Chat from "../components/common/Chat.vue";
import MapView from "../components/common/MapView.vue";

// Landing
import LandingPage from "../components/landing/LandingPage.vue";

// Seeker
import SeekerProfile from "../components/seeker/SeekerProfile.vue";

// function navigationGuard(to, from, next) {
//   var local = localStorage;
//   var now = new Date();
//   var isExpired = (sessionEndDate) => {
//     return now > new Date(Number(sessionEndDate));
//   };

//   if (to.name !== "login") {
//     if (local.sessionEndDate) {
//       if (isExpired(local.sessionEndDate)) next({ name: "login" });
//       else if (to.path.includes("/seeker") && local.userType == "seeker") {
//         next();
//       } else if (to.path.includes("/agent") && local.userType == "agent") {
//         next();
//       } else if (to.path.includes("/home")) next()
//       else {
//         next({ name: "login" });
//       }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     next();
//   }
// }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/",
      redirect: "/home",
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
          component: SignupView,
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
          component: MapView,
        },
        {
          path: "general",
          name: "agent-general",
          component: LandingPage,
        },
        {
          path: "payment",
          name: "payment",
          component: Payment, 
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
          component: MapView,
        },
        {
          path: "general",
          name: "general",
          component: LandingPage,
        },
      ],
    },
  ],
});
router.replace({ path: "/home", redirect: "/" });
//router.beforeEach(navigationGuard);
export default router;
