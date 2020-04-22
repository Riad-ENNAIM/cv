import React, { useReducer } from 'react';
import ReviewContext from './reviewContext';
import reviewReducer from './reviewReducer';
import {
  ADD_REVIEW,
  GET_REVIEWS
} from '../types';

const ReviewState = props => {
  const initialState = {
    reviews: null
  };

  const [state, dispatch] = useReducer(reviewReducer, initialState);

  // Get Reviews
  const getReviews = () => {
    const res = [
    {
      _id: 1,
      username: 'Riad ENNAIM',
      rating: 4.5,
      comment: 'bla bla bla',
      date: 'Maintenant'
    },
    {
      _id: 2,
      username: 'ENNAIM',
      rating: 3.5,
      comment: 'bla bla bla',
      date: 'Maintenant'
    }
  ]

    dispatch({
      type: GET_REVIEWS,
      payload: res
    });
  };


  // Add Review
  const addReview = review => {
    dispatch({
      type: ADD_REVIEW,
      payload: review
    });
  };
  
  return (
    <ReviewContext.Provider
      value={{
        reviews: state.reviews,
        getReviews,
        addReview
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;