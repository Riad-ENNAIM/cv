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
        reviews: action.payload
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
  
    default:
      return state;
  }
}