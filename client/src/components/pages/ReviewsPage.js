import React, { useEffect } from 'react';
import Reviews from '../reviews/Reviews';

const Home = () => {
  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="container-column">
      <Reviews />
    </div>
  );
}

export default Home;

