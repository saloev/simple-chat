import Vue from 'vue';
import { STORAGE_AUTH_TOKEN } from '../config';

const mutations = {
  setResponse: (state: any, payload: any) => {
    if (!state.response) state.response = {};
    if (!payload) state.response = {};
    for (const actionName in payload) {
      Vue.set(state.response, actionName, payload[actionName]);
    }
  },

  setPage: (state: any, payload: any) => {
    if (payload.page) {
      for (const actionName in payload.page) {
        Vue.set(state.page, actionName, payload.page[actionName]);
      }
    }

    if (payload.user) {
    }
  },
  setSession: (state: any, payload: any) => {
    if (payload.session) {
      if (!state.session) state.session = {};
      state.session.user = payload.session.user;
      if (payload.session.auth) {
        state.session.auth = payload.session.auth;
        localStorage.setItem(STORAGE_AUTH_TOKEN, state.session.auth);
      } else {
        localStorage.removeItem(STORAGE_AUTH_TOKEN);
        console.log('Auth unset');
      }
    } else {
      localStorage.removeItem(STORAGE_AUTH_TOKEN);
      console.log('Auth unset');
    }
  },
};

export default mutations;
