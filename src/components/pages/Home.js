import React, { useContext, useEffect } from 'react';
import Experiences from '../experiences/Experiences';

import NavbarContext from '../../context/navbar/navbarContext';

const Home = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('experiences');
    // eslint-disable-next-line
  }, []);

  return <Experiences />
}

export default Home;

