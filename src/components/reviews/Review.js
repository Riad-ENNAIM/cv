import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../utils/Rating';
import avatar from '../../images/avatar.png';

const Review = ({ username, date, comment, rating }) => {
  return (
    <div className="review">
      <div className="review-header">
        <img src={avatar} alt={username} />
        <div>
          <span className="review-date">{date}</span>
          <span className="review-username">{username}</span>
        </div>
      </div>

      <div className="review-content">
        <Rating />
        <p>
          {comment}
        </p>
      </div>
    </div>
  );
}

Review.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

Review.defaultProps = {
  username: 'Riad ENNAIM',
  date: '01-01-1900',
  rating: 5,
  comment: `Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
  le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin,
  le Lorem ipsum ou Lipsum.`
};

export default Review;
