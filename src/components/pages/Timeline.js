import React, { useContext, useEffect } from 'react';
import Milestones from '../milestones/Milestones';

import NavbarContext from '../../context/navbar/navbarContext';

const Timeline = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('timeline');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page container-column justify-content-center align-items-center">
      <Milestones />
    </div>
  );
}

export default Timeline;
