import React from 'react';
import Review from './Review';

const Reviews = () => {
  return (
    <>
      <Review username="Adil Jalal" />
      <Review comment="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
      />
      <Review username="Mohamed Ennaim" />
    </>
  );
}

export default Reviews;