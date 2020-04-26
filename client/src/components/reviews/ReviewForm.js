import React, { useState, useContext, useEffect, useRef } from 'react';
import Rating from '../utils/Rating';
import typingSpinner from '../../images/typing.gif';

import ReviewContext from '../../context/review/reviewContext';

const ReviewForm = () => {
  const reviewContext = useContext(ReviewContext);
  const { addReview, toggleForm } = reviewContext;

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const [review, setReview] = useState({
    username: '',
    comment: '',
    rating: 0
  });
  const [avatar, setAvatar] = useState({
    name: '',
    background: '#ffffff'
  });
  const [isTypingComment, setIsTypingComment] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const onChange = e => setReview({...review, [e.target.name]: e.target.value});

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
      z: '678'
    }
    
    const name = review.username.replace(/[^A-Z a-z]/g, '').replace(/\s+/g, " ").trim().split(' ');
    const firstLetter = name[0].slice(0,1);
    const lastLetter = name.length > 1 ? name[1].slice(0,1) : name[0].slice(name[0].length - 1);

    setAvatar({
      name: name.length > 1 ? (firstLetter + lastLetter).toUpperCase() : firstLetter.toUpperCase(),
      background: '#'+ letterColors[firstLetter.toLowerCase()] + letterColors[lastLetter.toLowerCase()]
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    addReview({
      ...review,
      username: review.username.replace(/\s+/g, " ").trim(), // Remove extrat white spaces
      comment: review.comment.replace(/\n\r?/g, '<br />') // Add line breaks
    });
    // toggleForm();
    setIsSending(true);
  };

  const closeForm = () => toggleForm();

  const toggleTypingSpinner = () => setIsTypingComment(!isTypingComment);

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="review">
        <div className="review-title">
          <span className="review-avatar" style={{background: avatar.background}}>{avatar.name}</span>
          <div>
            <span className="review-date">Maintenant</span>
            <span className="review-username">
              <input
                id="username"
                type="text"
                placeholder="Entrer votre nom"
                name="username"
                value={review.username}
                onChange={onChange}
                onBlur={updateAvatar}
                title="Entrer un nom valide, juste des lettres !"
                autoFocus
                required
              />
            </span>
          </div>
        </div>

        <div className="review-content">
          <div className="container justify-content-space-between align-items-center">
            <Rating
              isActive={true}
              onClickStar={value => setReview({ ...review, rating: value + 1 })} rating={review.rating}
            />

            <div className="toggle-form" onClick={closeForm}>
              <i className="fas fa-times"></i>
            </div>
          </div>

          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            rows="7"
            style={isTypingComment && review.comment === '' ? {background: typingSpinner} : null}
            onChange={onChange}
            onFocus={toggleTypingSpinner}
            onBlur={toggleTypingSpinner}
          />
        </div>
      </div>

      <div className="container justify-content-center align-items-center">
        <input
          type="submit"
          value="Commenter"
          className={`btn btn-center ${isSending ? 'btn-disabled' : 'btn-primary'}`}
          disabled={isSending}
        />
      </div>
    </form>
  );
}

export default ReviewForm;
