import { SET_ACTIVE_TAB } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
  
    default:
      return state;
  }
}