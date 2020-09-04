import { RootState, Pages } from '../types';

const getters = {
  page(state: RootState) {
    return state.response;
  },
  user(state: RootState) {
    return state.session.user;
  },
  messages(state: RootState) {
    return state.messages;
  },
};
export default getters;
