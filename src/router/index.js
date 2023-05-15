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
  },
  {
    path: '/match',
    name: 'match',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/match.vue'),
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
