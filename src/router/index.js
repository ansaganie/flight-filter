import { createRouter, createWebHistory } from 'vue-router';
import { MAIN_PAGE_LINK } from '../GlobalConstants';

const routes = [
  {
    path: MAIN_PAGE_LINK,
    name: 'MainPage',
    component: () => import('../components/MainPage/MainPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: () => import('../components/NotFoundPage/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
