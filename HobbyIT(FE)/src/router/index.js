// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/HomeDefault.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  // 모달을 위한
  {
    path: '/router',
    component: () => import('@/layouts/default/HomeDefault.vue'),
    children: [
      {
        path: '',
        name: 'Modal',
        component: () => import('@/views/Modal.vue'),
      },
    ],
  },
  //
  {
    path: '/signup',
    component: () => import('@/layouts/default/HomeDefault.vue'),
    children: [
      {
        path: '',
        name: 'signup',
        component: () => import('@/views/Signup.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/default/HomeDefault.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/LogIn.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/default/MainPage.vue'),
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/views/GuideView.vue'),
      },
    ],
  },
  {
    path: '/main',
    component: () => import('@/layouts/default/MainPage.vue'),
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('@/views/MainView.vue'),
      },
    ],
  },
  {
    path: '/promo',
    component: () => import('@/layouts/default/MainPage.vue'),
    children: [
      {
        path: '',
        name: 'promo',
        component: () => import('@/views/PromoPageView.vue'),
      },
    ],
  },
  {
    path: '/mypage',
    component: () => import('@/layouts/default/MainPage.vue'),
    children: [
      {
        path: ':nickname',
        name: 'MyPage',
        component: () => import('@/views/MypageView.vue'),
      },
    ],
  },
  {
    path: '/group',
    component: () => import('@/layouts/default/HomeDefault.vue'),
    children: [
      {
        path: '',
        name: 'Grouppage',
        component: () => import('@/views/GroupView.vue'),
        children: [
          {
            path: ':id/videochat',
            component: () => import('@/views/VideoChat.vue'),
            name: 'VideoChat',
          },
          {
            path: ':id',
            name: 'GroupMainPage',
            component: () => import('@/views/GroupPageView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/:pathMathch(.*)*',
    redirect: '/404',
    // notfound!
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // scroll to the top of the page
  document.documentElement.scrollTop = 0;
  // continue with the navigation
  next();
});

export default router;
