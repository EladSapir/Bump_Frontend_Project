import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login_signup',
    name: 'login_signup',
    component: () => import(/* webpackChunkName: "login_signup" */ '../views/login_signup.vue'),
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/homepage.vue'),
    meta: { requiresAuth: true } // Add requiresAuth meta field for protected route
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    const userId = localStorage.getItem('userId');
    if (userId) {
      // User is authenticated, allow access
      next();
    } else {
      // User is not authenticated, redirect to login page
      next('/login_signup');
    }
  } else {
    // For routes that do not require authentication, allow access
    next();
  }
});

export default router;
