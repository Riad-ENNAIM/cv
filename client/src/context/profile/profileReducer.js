import { GET_EXPERIENCES, GET_PROJECTS, GET_SKILLS, GET_TRAININGS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
        isLoading: false
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        isLoading: false
      };

    case GET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        isLoading: false
      };

    case GET_TRAININGS:
      return {
        ...state,
        trainings: action.payload,
        isLoading: false
      };
  
    default:
      return state;
  }
}