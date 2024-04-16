import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('../pages/index.vue')
        },
        {
          path: '/films',
          name: 'films',
          component: () => import('../pages/films/index.vue')
        },
        {
          path: '/films/:id',
          name: 'films-id',
          component: () => import('../pages/films/id.vue')
        },
        {
          path: '/series',
          name: 'seriess',
          component: () => import('../pages/series.vue')
        },
        {
          path: '/years',
          name: 'years',
          component: () => import('../pages/years.vue')
        },
        {
          path: '/top',
          name: 'top',
          component: () => import('../pages/top/top.vue')
        },
        {
          path: '/top-month',
          name: 'top-month',
          component: () => import('../pages/top/top-month.vue')
        },
        {
          path: '/top-year',
          name: 'top-year',
          component: () => import('../pages/top/top-year.vue')
        },
        {
          path: '/dataDorams',
          name: 'dataDorams',
          component: () => import('../pages/dataDorams.vue')
        },
        {
          path: '/detektiv',
          name: 'detektiv',
          component: () => import('../pages/genres/detektiv.vue')
        },
        {
          path: '/drama',
          name: 'drama',
          component: () => import('../pages/genres/drama.vue')
        },
        {
          path: '/fantasy',
          name: 'fantasy',
          component: () => import('../pages/genres/fantasy.vue')
        },
        {
          path: '/history',
          name: 'history',
          component: () => import('../pages/genres/history.vue')
        },
        {
          path: '/triller',
          name: 'triller',
          component: () => import('../pages/genres/triller.vue')
        },
        {
          path: '/melodrama',
          name: 'melodrama',
          component: () => import('../pages/genres/melodrama.vue')
        },
        {
          path: '/sport',
          name: 'sport',
          component: () => import('../pages/genres/sport.vue')
        },
        {
          path: '/uzhasy',
          name: 'uzhasy',
          component: () => import('../pages/genres/uzhasy.vue')
        },
        {
          path: '/boevik',
          name: 'boevik',
          component: () => import('../pages/genres/boevik.vue')
        },
        {
          path: '/comedy',
          name: 'comedy',
          component: () => import('../pages/genres/comedy.vue')
        },
        {
          path: '/login/register',
          name: 'register',
          component: () => import('../pages/login/register.vue'),
          meta: {
            layout: 'login'
          }
        },
        {
          path: '/login/auth',
          name: 'login',
          component: () => import('../pages/login/login.vue'),
          meta: {
            layout: 'login'
          }
        }

      ]
    }
  ]
});

export default router;