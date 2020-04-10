import { 
  SET_ACTIVE_TAB,
  TOGGLE_TIMELINE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    case TOGGLE_TIMELINE:
      return {
        ...state,
        isTimeline: !state.isTimeline,
      };
  
    default:
      return state;
  }
}