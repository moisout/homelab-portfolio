import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/index.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/2020/ina4a/gruppe14',
        component: Index,
      },
      {
        path: '/',
        component: Index,
        // redirect: { name: '/2020/ina4a/gruppe14' },
      },
    ],
  });
}
