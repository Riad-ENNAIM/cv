import {
  ADD_REVIEW,
  GET_REVIEWS,
  REVIEW_ERROR,
  TOGGLE_FORM
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        showForm: action.payload.length === 0,
        isLoading: false
      };

    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        showForm: false,
        isLoading: false
      };

    case TOGGLE_FORM:
      return {
        ...state,
        showForm: !state.showForm,
        isLoading: false
      };
  
    default:
      return state;
  }
}