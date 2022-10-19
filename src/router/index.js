import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Sidebar from '../components/Sidebar.vue'
import SeekerDashboardView from '../views/Seeker_Dashboard.vue'
import Navbar from '../components/Nav.vue'
import NavbarDashboard from '../components/NavDashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            components: {
                default: HomeView,
                navbar: Navbar
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        },
        {
            path: '/login',
            name: 'login',
            components: {
                default: LoginView,
                navbar: Navbar
            }
        },
        {
            path: '/seeker/dashboard',
            name: 'SeekerDashboard',
            components: {
                default: SeekerDashboardView,
                sidebar: Sidebar,
                navbar: NavbarDashboard
            }
        }
    ]
})

export default router