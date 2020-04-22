import React, { useEffect, useContext } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

import ReviewContext from '../../context/review/reviewContext';

const Reviews = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviews, showForm, getReviews, toggleForm } = reviewContext;

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, []);

  if(reviews === null){
    return <h3>Aucun Commentaire</h3>
  }

  return (
    <>
      {
        reviews.map(review => <Review key={review._id} review={review} />)
      }

      {
        !showForm ?
          <button className="btn btn-primary btn-center" onClick={() => toggleForm()}>Commenter</button>
        :
          <ReviewForm />
      }
    </>
  );
}

export default Reviews;