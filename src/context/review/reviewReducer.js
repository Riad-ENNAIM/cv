import {
  ADD_REVIEW,
  GET_REVIEWS,
  TOGGLE_FORM,
  LOADING
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
      const review = action.payload;
      review._id = state.reviews.length + 1;
      return {
        ...state,
        reviews: [...state.reviews, review]
      };

    case TOGGLE_FORM:
      return {
        ...state,
        showForm: !state.showForm
      };

    case LOADING:
      return {
        ...state,
        isLoading: true
      };
  
    default:
      return state;
  }
}