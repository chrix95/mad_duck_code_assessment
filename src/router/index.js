import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import PageLayout from '@/layout/PageLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
        alias: '/home',
        meta: { pageTitle: 'Home' }
      },
      // {
      //     path: '/register',
      //     name: 'Register',
      //     component: require('../views/RegisterView.vue').default,
      //     meta: { pageTitle: 'Register' }
      //   },
    ]
  },
  { path: '/:pathMatch(.*)*', beforeEnter: (to, from, next) => { next('/404') } },
  {
    path: '/404',
    component: require('../views/404.vue').default,
    meta: { pageTitle: '404 Page' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // can handle authentication here
  next();
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // 
  }
  next();
});

router.afterEach((to, from) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.pageTitle}`;
  window.scroll(0, 0);
});

export default router;
