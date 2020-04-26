import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '../utils/Rating';

const Review = ({ review }) => {
  const { username, comment, rating, date } = review;

  useEffect(() => {
    setAvatarFromUsername();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDiffDateFromDate();
  });

  const [avatar, setAvatar] = useState({
    name: '',
    background: ''
  });

  const [diffDate, setDiffDate] = useState();

  const setAvatarFromUsername = () => {
    const letterColors = {
      a: 'F23',
      b: 'E34',
      c: 'F45',
      d: 'AF6',
      e: '5AB',
      f: '678',
      g: '789',
      h: '890',
      i: '90F',
      j: 'FF2',
      k: 'F23',
      l: 'FE4',
      m: 'DE5',
      n: 'F96',
      o: '567',
      p: '678',
      q: '789',
      r: '890',
      s: '90F',
      t: 'FF2',
      u: 'F23',
      v: 'AF4',
      w: 'CD5',
      x: 'AB6',
      y: 'ABC',
      z: '678',
    };
    const name = username.replace(/[^A-Z a-z]/g, '').replace(/\s+/g, " ").trim().split(' ');
    const firstLetter = name[0].slice(0,1);
    const lastLetter = name.length > 1 ? name[1].slice(0,1) : name[0].slice(name[0].length - 1);

    setAvatar({
      name: name.length > 1 ? (firstLetter + lastLetter).toUpperCase() : firstLetter.toUpperCase(),
      background: '#'+ letterColors[firstLetter.toLowerCase()] + letterColors[lastLetter.toLowerCase()]
    });
  }

  const setDiffDateFromDate = () => {
    const now = new Date();
    const reviewDate = new Date(date);
    const diffTime = now.getTime() - reviewDate.getTime();

    if (diffTime >= 1000 * 60 * 60 * 24 * 365) {
      if (diffTime >= 1000 * 60 * 60 * 24 * 365 * 2.5) {
        setDiffDate('3 ans');
      } else if (diffTime >= 1000 * 60 * 60 * 24 * 365 * 1.5) {
        setDiffDate('2 ans');
      } else {
        setDiffDate('1 an');
      }
    } else {
      if (diffTime < 1000 * 60 * 60 * 24 * 30) {
        if (diffTime < 1000 * 60 * 60 * 24 * 7) {
          if (diffTime < 1000 * 60 * 60 * 24) {
            if (diffTime < 1000 * 60 * 60) {
              if(diffTime < 1000 * 60) {
                setDiffDate('Maintenant');
              } else {
                // Minutes
                const numberOfUnits = Math.round(diffTime / (1000 * 60));
                setDiffDate(`${numberOfUnits} minute${numberOfUnits > 1 ? 's' : ''}`);
              }
            } else {
              // Hours
              const numberOfUnits = Math.round(diffTime / (1000 * 60 * 60));
              setDiffDate(`${numberOfUnits} heure${numberOfUnits > 1 ? 's' : ''}`);
            }
          } else {
            // Days
            const numberOfUnits = Math.round(diffTime / (1000 * 60 * 60 * 24));
            setDiffDate(`${numberOfUnits} jour${numberOfUnits > 1 ? 's' : ''}`);
          }
        } else {
          // Weeks
          const numberOfUnits = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7));
          setDiffDate(`${numberOfUnits} semaine${numberOfUnits > 1 ? 's' : ''}`);
        }
      } else {
        // Months
        const numberOfUnits = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30));
        setDiffDate(`${numberOfUnits} mois`);
      }
    }
  }

  return (
    <div className="review">
      <div className="review-title">
        <span className="review-avatar" style={{background: avatar.background}}>{avatar.name}</span>
        <div>
          <span className="review-date">{diffDate}</span>
          <span className="review-username">{username}</span>
        </div>
      </div>

      <div className="review-content">
        <Rating rating={rating} />
        <p dangerouslySetInnerHTML={{__html: comment}} />
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
