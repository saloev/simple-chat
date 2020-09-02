import { RootState } from '../types';

let state: any = {
  // основной объект ответа от БЕ
  response: {},

  // сессия пользователя
  session: {
    user: {},
  },
};

export default state;
