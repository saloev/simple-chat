import Vue from 'vue';
import { STORAGE_AUTH_TOKEN } from '../config';

const mutations = {
  /**
   *
   */
  setResponse: (state: any, payload: any) => {
    if (!state.response) state.response = {};
    if (!payload) state.response = {};
    Object.keys(payload).forEach((key) => {
      Vue.set(state.response, key, payload[key]);
    });
  },

  /**
   *
   */
  setPage: (state: any, payload: any) => {
    if (!state.page) state.page = {};
    if (!payload) state.page = {};
    Object.keys(payload).forEach((key) => {
      Vue.set(state.page, key, payload[key]);
    });
  },

  /**
   *
   */
  setSession: (state: any, payload: any) => {
    if (payload && payload.session) {
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
      Vue.set(state.session, 'auth', null);
      Vue.set(state.session, 'user', null);
      console.log('Auth unset');
    }
  },

  /**
   *
   * @param state
   * @param payload
   */
  setState(state: any, {key, value}: any) {
    Vue.set(state, key, value);
  },
};

export default mutations;
