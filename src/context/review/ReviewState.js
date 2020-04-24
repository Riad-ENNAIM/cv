import React, { useReducer } from 'react';
import ReviewContext from './reviewContext';
import reviewReducer from './reviewReducer';
import {
  ADD_REVIEW,
  GET_REVIEWS,
  TOGGLE_FORM
} from '../types';

const ReviewState = props => {
  const initialState = {
    reviews: null,
    showForm: false,
    isLoading: true
  };

  const [state, dispatch] = useReducer(reviewReducer, initialState);

  // Get Reviews
  const getReviews = () => {
    const res = [
      {
        _id: 1,
        username: 'Riad ENNAIM',
        rating: 4,
        comment: 'bla <br /> bla bla',
        date: '2020-04-24T01:55:01.041+00:00'
      },
      {
        _id: 2,
        username: 'ENNAIM',
        rating: 3,
        comment: 'bla bla bla',
        date: '2019-12-29T15:03:01.041+00:00'
      },
      {
        _id: 3,
        username: 'ENNAIM r',
        rating: 2,
        comment: 'bla bla bla',
        date: '2020-04-23T15:53:01.041+00:00'
      }
    ];

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

  // Toggle Review Form
  const toggleForm = () => dispatch({ type: TOGGLE_FORM });
  
  return (
    <ReviewContext.Provider
      value={{
        reviews: state.reviews,
        showForm: state.showForm,
        isLoading: state.isLoading,
        getReviews,
        addReview,
        toggleForm
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;