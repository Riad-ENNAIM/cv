import React, { useReducer } from 'react';
import axios from 'axios';
import ReviewContext from './reviewContext';
import reviewReducer from './reviewReducer';
import {
  ADD_REVIEW,
  GET_REVIEWS,
  REVIEW_ERROR,
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
  const getReviews = async () => {
    try {
      const res = await axios.get('/api/reviews');

      dispatch({
        type: GET_REVIEWS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REVIEW_ERROR,
        payload: err.response.msg
      });
    }
  };


  // Add Review
  const addReview = async review => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/reviews', review, config);

      dispatch({
        type: ADD_REVIEW,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REVIEW_ERROR,
        payload: err.response.msg
      });
    }
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