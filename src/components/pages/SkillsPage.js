import React, { useContext, useEffect } from 'react';
import Skills from '../skills/Skills';

import NavbarContext from '../../context/navbar/navbarContext';

const SkillsPage = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('skills');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page container wrapper">
      <Skills />
    </div>
  );

}

export default SkillsPage;
