import {
  ADD_REVIEW,
  GET_REVIEWS,
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
      const review = action.payload;
      review._id = state.reviews.length + 1;
      review.date = new Date();
      return {
        ...state,
        reviews: [...state.reviews, review],
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