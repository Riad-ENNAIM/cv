import React, { useState, useContext } from 'react';
import Rating from '../utils/Rating';

import ReviewContext from '../../context/review/reviewContext';

const ReviewForm = () => {
  const reviewContext = useContext(ReviewContext);
  const { addReview, toggleForm } = reviewContext;

  const [review, setReview] = useState({
    username: '',
    comment: '',
    rating: ''
  });

  const [avatar, setAvatar] = useState({
    name: '',
    background: '#ffffff'
  });

  const onChange = e => setReview({  ...review, [e.target.name]: e.target.value});

  const onBlur = e => updateAvatar();

  const updateAvatar = () => {
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
    
    const name = review.username.split(' ');
    const firstLetter = name[0].slice(0,1);
    const lastLetter = name.length > 1 ? name[1].slice(0,1) : name[0].slice(name[0].length - 1);
    const colorNumber = '#'+ letterColors[firstLetter.toLowerCase()] + letterColors[lastLetter.toLowerCase()];

    setAvatar({
      name: firstLetter + lastLetter,
      background: colorNumber
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    addReview(review);

    toggleForm();
  };

  const closeForm = () => {
    toggleForm()
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="review">
        <div className="review-header">
          <span className="review-avatar" style={{background: avatar.background}}>{avatar.name}</span>
          <div>
            <span className="review-date">Maintenant</span>
            <span className="review-username">
              <input
                type="text"
                placeholder="Entrer votre nom"
                name="username"
                value={review.username}
                onChange={onChange}
                onBlur={onBlur}
                autoFocus
                required
              />
            </span>
          </div>
        </div>

        <div className="review-content">
          <div className="container justify-content-space-between align-items-center">
            <Rating />
            <div className="toggle-form" onClick={closeForm}>
              <i class="fas fa-times"></i>
            </div>
          </div>

          <textarea
            name="comment"
            value={review.comment}
            rows="7"
            onChange={onChange} />
        </div>
      </div>

      <div className="container justify-content-center align-items-center">
        <input
          type="submit"
          value="Commenter"
          className="btn btn-primary btn-center"
        />
      </div>
    </form>
  );
}

export default ReviewForm;