import {SET_ALERT, REMOVE_ALERT} from '../types';

export default (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
};
