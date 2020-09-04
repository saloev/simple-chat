import { RootState } from '../types';

const state: any = {
  // основной объект ответа от БЕ
  response: {},

  // данные из БЕ
  page: {}, // индивидуальные для каждой страницы

  // сессия пользователя
  session: {
    auth: {},
  },

  //Сообщение из чата
  messages: [],
};

export default state;
