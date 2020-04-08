import React, { useContext, useEffect } from 'react';
import AcademicProjects from '../academicProjects/AcademicProjects'

import NavbarContext from '../../context/navbar/navbarContext';

const AcademicPage = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('projects');
    // eslint-disable-next-line
  }, []);

  return <AcademicProjects />
}

export default AcademicPage;
