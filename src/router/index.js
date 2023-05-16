import { createRouter, createWebHistory } from 'vue-router';
import landingpage from '../views/landingpage.vue';

const routes = [
  {
    path: '/',
    name: 'landingpage',
    component: landingpage,
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
  },
  {
    path: '/matching',
    name: 'matching',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/matching.vue'),
  },
  {
    path: '/profile/:userId/:differentUserId',
    name: 'profile',
    props: true,
    component: () => import(/* webpackChunkName: "homepage" */ '../views/profile.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
