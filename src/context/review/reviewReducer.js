import {
  ADD_REVIEW,
  GET_REVIEWS
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
      review._id = state.reviews.lenght + 1;
      return {
        ...state,
        reviews: [...state.reviews, review]
      };
  
    default:
      return state;
  }
}