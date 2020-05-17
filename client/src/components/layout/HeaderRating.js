import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../utils/Rating';

import ProfileContext from '../../context/profile/profileContext';
import ReviewContext from '../../context/review/reviewContext';

const HeaderRating = () => {
  const profileContext = useContext(ProfileContext);
  const reviewContext = useContext(ReviewContext);
  const { language, toggleLanguage } = profileContext;
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
      setGlobalRating(note);
    }
  }

  const changeLang = lang => {
    if(language && lang !== language) {
      toggleLanguage();
    }
  }

  return (
    <div className="main-rating">
      <h1>{globalRating.toFixed(1)}</h1>
      <Rating rating={globalRating}/>
      <Link exact="true" to="/reviews">{language === 'eng' ? 'Evaluation' : 'Évaluation'}</Link>

      <div className="lang-switcher">
        <span
          className={language !== 'eng' ? 'active' : ''}
          onClick={() => changeLang('fr')}
        >
          Fr
        </span>
        <span
          className={language === 'eng' ? 'active' : ''}
          onClick={() => changeLang('eng')}
        >
          Eng
        </span>
      </div>
    </div>
  );
}

export default HeaderRating;