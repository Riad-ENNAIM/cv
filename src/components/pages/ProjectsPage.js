import React, { useContext, useEffect } from 'react';
import Projects from '../projects/Projects';
import Milestones from '../milestones/Milestones';

import NavbarContext from '../../context/navbar/navbarContext';

const ProjectsPage = () => {
  const navbarContext = useContext(NavbarContext);
  const { isTimeline, setActiveTab } = navbarContext;

  useEffect(() => {
    setActiveTab('projects');
    // eslint-disable-next-line
  }, []);

  if(isTimeline) {
    return (
      <div className="page container-column justify-content-center align-items-center">
        <Milestones />
      </div>
    );
  }

  return (
    <div className="page container-column">
      <Projects />
    </div>
  );
}

export default ProjectsPage;
