import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/**
 * Plugins
 */
import vuetify from './plugins/vuetify';
// global components
import './plugins/base-components';

import './scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
