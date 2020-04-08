import React, { useContext, useEffect } from 'react';
import Milestones from '../milestones/Milestones';

import NavbarContext from '../../context/navbar/navbarContext';

const Timeline = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('timeline');
    // eslint-disable-next-line
  }, []);

  return <Milestones />
}

export default Timeline;
