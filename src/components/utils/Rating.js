import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  useEffect(() => {
    getStars();
    // eslint-disable-next-line
  }, [rating])

  const [stars, setStars] = useState(null);

  const getStars = () => {
    const starsArray = [];
    const trunc = Math.trunc(rating) <= 5 ? Math.trunc(rating) : 5;

    for(let i = 0; i < trunc; i++) {
      console.log('filled star', i)
      starsArray.push(<i key={i} className="fas fa-star"></i>);
    }

    if(rating < 5 ){
      if(rating > trunc) {
        console.log('half',trunc)
        starsArray.push(<i key={trunc} className="fas fa-star-half-alt"></i>);
      }
  
      if(Math.ceil(rating) < 5) {
        for(let i = Math.ceil(rating); i < 5; i++) {
          console.log('star', i)
          starsArray.push(<i key={i} className="far fa-star"></i>);
        }
      }
    }

    setStars(starsArray);
  }

  return (
    <div className="rating">
      {
        stars
      }
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

Rating.defaultProps = {
  rating: 0
};

export default Rating;
