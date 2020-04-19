import React from 'react';

const HeaderRating = () => {
  return (
    <div className="main-rating">
      <h1>2.5</h1>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <span>Évaluation</span>
    </div>
  );
}

export default HeaderRating;