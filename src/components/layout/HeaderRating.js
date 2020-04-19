import React from 'react';
import Rating from '../utils/Rating';

const HeaderRating = () => {
  return (
    <div className="main-rating">
      <h1>4.7</h1>
      <Rating rating={4.7}/>
      <span>Évaluation</span>
    </div>
  );
}

export default HeaderRating;