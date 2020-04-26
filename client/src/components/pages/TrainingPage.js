import React, { useContext, useEffect } from 'react';
import Training from '../training/Training';

import NavbarContext from '../../context/navbar/navbarContext';

const Timeline = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('training');
    // eslint-disable-next-line
  }, []);

  return <Training />;
}

export default Timeline;