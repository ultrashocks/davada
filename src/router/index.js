import Vue from 'vue';
import VueRouter from 'vue-router';
// import { store } from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginFormView.vue'),
      meta: { auth: false },
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
      meta: { auth: false },
    },
    // {
    //   path: '/pay',
    //   component: () => import('@/views/pay/PayView.vue'),
    //   meta: { auth: false, page: '' },
    // },
    // {
    //   path: '/pay/step1',
    //   component: () => import('@/views/pay/Step1ProductVendorView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 1 },
    // },
    // {
    //   path: '/pay/step2',
    //   component: () => import('@/views/pay/Step2CapureScreenView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 2 },
    // },
    // {
    //   path: '/pay/step3',
    //   component: () => import('@/views/pay/Step3VirtualAccountView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 3 },
    // },
    // {
    //   path: '/pay/step4',
    //   component: () => import('@/views/pay/Step4RepayInfoView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 4 },
    // },
    // {
    //   path: '/pay/step5',
    //   component: () => import('@/views/pay/Step5AgreeView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 5 },
    // },
    // {
    //   path: '/pay/step6',
    //   component: () => import('@/views/pay/Step6BankWriteView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 6 },
    // },
    // {
    //   path: '/pay/step7',
    //   component: () => import('@/views/pay/Step7BankLinkView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 7 },
    // },
    // {
    //   path: '/pay/step8',
    //   component: () => import('@/views/pay/Step8CertificationView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 8 },
    // },
    // {
    //   path: '/pay/step9',
    //   component: () => import('@/views/pay/Step9ProcessingView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 9 },
    // },
    // {
    //   path: '/pay/step10/success',
    //   component: () => import('@/views/pay/Step10SuccessView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 10 },
    // },
    // {
    //   path: '/pay/step10/error',
    //   component: () => import('@/views/pay/Step10ErrorView.vue'),
    //   meta: { auth: true, page: 'payStep', step: 10 },
    // },
    // {
    //   path: '/point',
    //   component: () => import('@/views/point/PointView.vue'),
    //   meta: { auth: true, page: '' },
    // },
    // {
    //   path: '/my',
    //   component: () => import('@/views/my/MyPageView.vue'),
    //   meta: { auth: true, page: '' },
    // },
    // {
    //   path: '/my/accountLink',
    //   component: () => import('@/views/my/AccountLinkView.vue'),
    //   meta: { auth: true, page: '' },
    // },
    // {
    //   path: '/my/accountLink/Step1',
    //   component: () => import('@/views/my/Step1BankSelectView.vue'),
    //   meta: { auth: true, page: 'myStep', step: 1 },
    // },
    // {
    //   path: '/my/accountLink/Step2',
    //   component: () => import('@/views/my/Step2BankLinkView.vue'),
    //   meta: { auth: true, page: 'myStep', step: 2 },
    // },
    // {
    //   path: '/my/accountLink/Step3',
    //   component: () => import('@/views/my/Step3ArsView.vue'),
    //   meta: { auth: true, page: 'myStep', step: 3 },
    // },
    // {
    //   path: '/my/accountLink/Step4',
    //   component: () => import('@/views/my/Step4ResultView.vue'),
    //   meta: { auth: true, page: 'myStep', step: 4 },
    // },
    {
      path: '/error',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { auth: false, page: '' },
    },
    {
      path: '*',
      redirect: '/error',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

/* router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['auth/getIsLogin']) {
    next('/');
    return;
  } else {
    next();
  }
}); */
