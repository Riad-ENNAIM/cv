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
      localStorage.setItem('isTimeline', JSON.stringify(!state.isTimeline));
      return {
        ...state,
        isTimeline: !state.isTimeline,
      };
  
    default:
      return state;
  }
}