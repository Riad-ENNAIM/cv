import React, { useState, useEffect, useContext } from 'react';
import Rating from '../utils/Rating';

import ReviewContext from '../../context/review/reviewContext';

const HeaderRating = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviews, getReviews } = reviewContext;

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updateGlobalRating();
    // eslint-disable-next-line
  }, [reviewContext, reviews]);

  const [globalRating, setGlobalRating] = useState(0);

  const updateGlobalRating = () => {
    if(reviews && reviews.length > 0) {
      const sum = reviews.reduce((acc, review) => {
        return review.rating ? acc + review.rating : acc;
      }, 0);
      
      const note = sum / reviews.length <= 5 ? sum / reviews.length : 5;
      setGlobalRating(note.toFixed(1));
    }
  }
  return (
    <div className="main-rating">
      <h1>{globalRating}</h1>
      <Rating rating={globalRating}/>
      <span>Évaluation</span>
    </div>
  );
}

export default HeaderRating;