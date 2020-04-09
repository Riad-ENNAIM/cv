import React, { useContext, useEffect } from 'react';
import AcademicProjects from '../academicProjects/AcademicProjects'

import NavbarContext from '../../context/navbar/navbarContext';

const AcademicPage = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('projects');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page container-column">
      <AcademicProjects />
    </div>
  );
}

export default AcademicPage;
