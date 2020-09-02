import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
   // scroll to top
   window.scrollTo({
    'behavior': 'auto', 
    'left': 0,
    'top': 0
  });
});

export default router;
