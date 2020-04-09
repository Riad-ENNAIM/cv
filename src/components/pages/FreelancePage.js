import React, { useContext, useEffect } from 'react';
import FreelanceProjects from '../freelanceProjects/FreelanceProjects';

import NavbarContext from '../../context/navbar/navbarContext';

const FreelancePage = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('freelance');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page container-column">
      <FreelanceProjects />
    </div>
  );
}

export default FreelancePage;
