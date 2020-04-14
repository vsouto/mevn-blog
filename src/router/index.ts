import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
