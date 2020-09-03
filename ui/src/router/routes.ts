import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const MainLayout = () => import('@/layout/MainLayout.vue');
const AuthLayout = () => import('@/layout/AuthLayout.vue');

const Auth = () => import('@/views/Auth.vue');
const Chat = () => import('@/views/Chat.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'chat',
        meta: {
          apiPath: '/chat/messages',
        },
        component: Chat,
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '/auth',
        name: 'auth-page',
        meta: {
          apiPath: '/auth/signup',
          noAuth: true,
        },
        component: Auth,
      },
    ],
  },
];

export default routes;
