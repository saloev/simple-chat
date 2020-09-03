import { Store } from 'vuex';

import { API_DEFAULT_ACTION, API_SERVER_PREFIX } from '@/config';
import { api } from './api';
import { APIOptions, RootState } from '../types';

const actions = {
  /**
   * Базовый метод, не должен вызываться вручную.
   * @param store
   * @param params
   * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
   */
  request({ commit, state }: any, params: APIOptions) {
    return api(params.action ? params.action : API_DEFAULT_ACTION, params).then((response) => {
      commit('setResponse', response);
      return response;
    });
  },

  /**
   * Для свободного обращения к API.
   * @param store
   * @param params
   * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
   */
  post(store: any, params: APIOptions) {
    params = params || {};
    params.method = 'POST';
    return actions.request(store, params);
  },

 /**
   * Запрос на проверку авторизации пользователя
   * @param store
   * @param params
   * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
   */
  fetchUser(store: any, params: APIOptions) {
    params = params || {};
    params.action = `/users/me`;
    params.method = 'POST';
    return actions.request(store, params);
  },

  /**
   * Загружает страницу в роутинге.
   * @param store
   * @param params
   * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
   */
  fetchPage(store: any, params: APIOptions) {
    params = params || {};
    params.method = params.method ? params.method : 'GET';
    return actions.request(store, params).then((result) => {
      store.commit('setPage', result);
    });
  },
};

export default actions;
