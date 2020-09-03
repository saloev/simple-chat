import Vue from 'vue';
import VueRouter from 'vue-router';
import { RawLocation } from 'vue-router';
import routes from './routes';
import store from '@/store';

import { STORAGE_AUTH_TOKEN } from '../config';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loaded: { user: Boolean; page: Boolean } = { user: false, page: false };
  const setLoaded = (mode: 'user' | 'page') => {
    loaded[mode] = true;
    if (loaded.user && loaded.page) next();
  };
  console.log(to.meta);
  // Нужно проверить авторизацию ?
  if (!to.meta['noAuth']) {
    store
      .dispatch('fetchUser')
      .then(({ users: { user } }) => {
        store.commit('setSession', {
          session: {
            user,
            auth: localStorage.getItem(STORAGE_AUTH_TOKEN),
          },
        });
        console.log(user, store.state);
        setLoaded('user');
      })
      .catch(() => {
        // здесь не вызываем next() - его вызовем ниже после получения fetchPage
        console.error('User data is empty, going to auth...');
        if (from.name !== 'auth-page')
          router.push({
            name: 'auth-page',
          });
      });
  } else setLoaded('user');

  // нужно фетчит данные с api ?
  if (to.meta['apiPath']) {
    let params = Object.assign({ action: to.meta.apiPath, params: to.params }, to.meta);
    store
      .dispatch('fetchPage', params)
      .then(() => {
        setLoaded('page');
      })
      .catch((err: any) => {
        console.error('Could not fetch API data: ', err);
      });
  } else setLoaded('page');
});

router.afterEach((to, from) => {
  // scroll to top
  window.scrollTo({
    behavior: 'auto',
    left: 0,
    top: 0,
  });
});

export default router;
