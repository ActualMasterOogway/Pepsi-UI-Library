import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import NotFound from '../Views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../Views/Docs/DocsLayout.vue'),
      children: [
        {
          path: '',
          name: 'docs-home',
          component: () => import('../Views/Docs/DocsHome.vue')
        },
        {
          path: 'getting-started',
          name: 'getting-started',
          component: () => import('../Views/Docs/GettingStarted.vue')
        }
      ]
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import('../Views/Contributors.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../Views/Updates.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
});

export default router;