import axios from 'axios';
import { STORAGE_AUTH_TOKEN, API_SERVER_PREFIX } from '@/config';
import 'axios-progress-bar/dist/nprogress.css';
import { APIOptions } from '../types';
//@ts-ignore
import { loadProgressBar } from 'axios-progress-bar';

const axiosWithProgress = axios.create();
const axiosWithoutProgress = axios.create();
loadProgressBar({ showSpinner: false }, axiosWithProgress);

export function api(cmd: string, options: APIOptions) {
  // по умолчанию - GET-запрос
  options.method = options.method || 'GET';

  console.log('API ' + options.method + ' request "' + cmd + '": ', options);

  // с прогрессбаром или нет?
  let axios = null;
  if (options.hidden) axios = axiosWithoutProgress;
  else axios = axiosWithProgress;

  // добавляем токен авторизации
  let authToken = localStorage.getItem(STORAGE_AUTH_TOKEN);
  if (authToken) axios.defaults.headers.common['Authorization'] = authToken;

  let params = null,
    data = null;
  if (options.method === 'GET') {
    // конкатинируем GET params & query:
    params = options.params || {};
    let query = options.query || {};
    params = { ...params, ...query };
  } else data = options.params;

  // определяем URL:
  let url = '';
  if (cmd.match(/^http:.+/)) {
    url = cmd;
    console.log('Requesting URL: ' + url);
  } else {
    // По умолчанию обращаемся к API
    url = `${API_SERVER_PREFIX}${cmd}`;
  }

  // установка Accept
  let accepts = ['application/json'];
  axios.defaults.headers.common['Accept'] = accepts.join(', ');

  const headers = {};

  return axios({
    method: options.method,
    url,
    params,
    headers,
    data,
  })
    .catch((error) => {
      console.error('API request error: ', error);
      return error;
    })
    .then((response) => {
      console.log('API Response: ', response);

      if (!response.data) throw 'No data in response object';
      // if(response.data.error) return router.push(<any>{name: 'Error'});

      if (response.data.error) {
        // API standard error
        console.warn('API error: ', response.data.error);
        if (response.data.code) throw { error: response.data.error, code: response.data.code };
        else throw response.data.error;
      }
      if (!response.data || !response.data.result) throw 'No result in response data object';

      return response.data.result;
    });
}

export default api;
