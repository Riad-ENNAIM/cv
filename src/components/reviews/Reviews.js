import React, { useEffect, useContext } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import Loader from '../utils/Loader';

import ReviewContext from '../../context/review/reviewContext';

const Reviews = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviews, showForm, getReviews, toggleForm, isLoading } = reviewContext;

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, []);

  if(reviews === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      { reviews.map(review => <Review key={review._id} review={review} />) }

      {
        showForm ?
          <ReviewForm />
        :
          <button className="btn btn-primary btn-center" onClick={() => toggleForm()}>Commenter</button>
      }
    </>
  );
}

export default Reviews;