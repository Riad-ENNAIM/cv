import { GET_PROFILE, TOGGLE_TIMELINE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
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