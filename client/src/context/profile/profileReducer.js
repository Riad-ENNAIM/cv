import { 
  GET_PROFILE,
  SEARCH_IN_PROFILE,
  TOGGLE_TIMELINE,
  TOGGLE_DARK_MODE,
  TOGGLE_MUSIC,
  UPDATE_AUDIO_SETTINGS,
  TOGGLE_LANGUAGE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };

    case SEARCH_IN_PROFILE:
      return {
        ...state,
        serchResult: action.payload
      };

    case TOGGLE_TIMELINE:
      return {
        ...state,
        isTimeline: !state.isTimeline,
      };

    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };

    case TOGGLE_MUSIC:
      return {
        ...state,
        isMusic: !state.isMusic,
      };

    case UPDATE_AUDIO_SETTINGS:
      return {
        ...state,
        audioSettings: action.payload,
      };
  
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
  
    default:
      return state;
  }
}