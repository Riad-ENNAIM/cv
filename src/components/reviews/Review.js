import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '../utils/Rating';

const Review = ({ review }) => {
  const { username, comment, rating, date } = review;

  useEffect(() => {
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
    }
    
    const name = username.split(' ');
    const firstLetter = name[0].slice(0,1);
    const lastLetter = name.length > 1 ? name[1].slice(0,1) : name[0].slice(name[0].length - 1);
    const colorNumber = '#'+ letterColors[firstLetter.toLowerCase()] + letterColors[lastLetter.toLowerCase()];

    setAvatar({
      name: firstLetter + lastLetter,
      background: colorNumber
    });
  }, [username]);

  const [avatar, setAvatar] = useState({
    name: '',
    background: ''
  });

  return (
    <div className="review">
      <div className="review-header">
        <span className="review-avatar" style={{background: avatar.background}}>{avatar.name}</span>
        <div>
          <span className="review-date">{date}</span>
          <span className="review-username">{username}</span>
        </div>
      </div>

      <div className="review-content">
        <Rating rating={rating} />
        <p dangerouslySetInnerHTML={{__html: comment}} />
          {/* {comment} */}
        {/* </p> */}
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
