import React, { useContext, useEffect } from 'react';
import Reviews from '../reviews/Reviews';

import NavbarContext from '../../context/navbar/navbarContext';

const Home = () => {
  const navbarContext = useContext(NavbarContext);
  const { setActiveTab } = navbarContext;

  useEffect(() => {
    setActiveTab('reviews');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page container-column">
      <Reviews />
    </div>
  );
}

export default Home;

