import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/home.vue';
import Character from '../views/character.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
