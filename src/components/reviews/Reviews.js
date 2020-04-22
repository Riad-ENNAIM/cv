import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Review username="Ennaim" />
      <Review comment="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
      />
      <Review username="Mohamed Ennaim" />

      {
        !showForm ?
          <button className="btn btn-primary btn-center" onClick={() => setShowForm(!showForm)}>Commenter</button>
        :
          <ReviewForm />
      }
    </>
  );
}

export default Reviews;