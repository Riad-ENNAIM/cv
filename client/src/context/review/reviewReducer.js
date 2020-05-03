import {
  ADD_REVIEW,
  GET_REVIEWS,
  DELETE_REVIEW,
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
        isDeletable: true,
        showForm: false,
        isLoading: false
      };

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(review => review._id !== action.payload),
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