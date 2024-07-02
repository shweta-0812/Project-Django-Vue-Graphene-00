import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
import TestConnection from '../views/TestConnection.vue'
import Dashboard from '../views/Dashboard.vue'
import Callback from  '../views/Callback.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/auth/google/callback',
        name: 'Callback',
        component: Callback,
    },
    {
        path: '/test-connection',
        name: 'TestConnection',
        component: TestConnection,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// Add the router guard here
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('JwtToken'); // Check if JWT token exists

    // Check if the route requires authentication and if the user is not authenticated
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        // Redirect to login page
        next({ name: 'Login' });
    } else {
            // Proceed to the next route
            next();
    }
});
export default router
