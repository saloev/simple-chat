import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

import store from '@/store';

import {API_PATH, SOCKET_ACTION_PREFIX} from '@/config';

Vue.use(new VueSocketIO({
    debug: true,
    connection: API_PATH,
    vuex: {
        store,
        actionPrefix: SOCKET_ACTION_PREFIX,
    },
}));