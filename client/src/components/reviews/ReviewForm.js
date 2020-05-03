import React, { useState, useContext, useEffect, useRef } from 'react';
import Rating from '../utils/Rating';
import letterColors from '../../data/letterColors';

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
  const [showAlert, setShowAlert] = useState(false);

  const onChange = e => setReview({...review, [e.target.name]: e.target.value});

  const updateAvatar = () => {
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
    
    if(review.rating === 0 && !showAlert) {
      setShowAlert(true);
      return;
    }

    setIsSending(true);
    addReview({
      ...review,
      username: review.username.replace(/\s+/g, " ").trim(), // Remove extrat white spaces
      comment: review.comment.replace(/\(y\)/g, '<i class="like fas fa-thumbs-up" title="(y) = Like"></i>').replace(/<3/g, '<i class="heart fas fa-heart" title="<3 = Heart"></i>').replace(/\n\r?/g, '<br />') // Add line breaks
    });
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
            <div className={showAlert && review.rating === 0 ? 'rating-alert' : ''}>
              <Rating
                isActive={true}
                onClickStar={value => setReview({ ...review, rating: value + 1 })} rating={review.rating}
              />
            </div>
            {
              showAlert && review.rating === 0 ?
                <span className="tag-alert">
                  Vous pouvez ajouter une note !
                </span>
              :
                null
            }

            <div className="remove" onClick={closeForm}>
              <i className="fas fa-times"></i>
            </div>
          </div>

          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            rows="7"
            className={isTypingComment && review.comment === '' ? 'bg-typing-spinner' : ''}
            onChange={onChange}
            onFocus={toggleTypingSpinner}
            onBlur={toggleTypingSpinner}
          />
        </div>
      </div>

      <div className="container justify-content-center align-items-center">
        <input
          type="submit"
          value={`Commenter ${showAlert && review.rating === 0 ? 'avec une note 0/5' : ''}`}
          className={`btn btn-center ${isSending ? 'btn-disabled' : 'btn-primary'}`}
          disabled={isSending}
        />
      </div>
    </form>
  );
}

export default ReviewForm;
