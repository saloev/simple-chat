import { RootState, Pages } from '../types';

const getters = {
  page(state: RootState) {
    return state.response;
  },
};
export default getters;
