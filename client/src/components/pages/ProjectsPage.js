import React, { useContext, useEffect } from 'react';
import Projects from '../projects/Projects';
import ProjectMilestones from '../projects/ProjectMilestones';

import NavbarContext from '../../context/navbar/navbarContext';

const ProjectsPage = () => {
  const navbarContext = useContext(NavbarContext);
  const { isTimeline, setActiveTab } = navbarContext;

  useEffect(() => {
    setActiveTab('projects');
    // eslint-disable-next-line
  }, []);

  if(isTimeline) {
    return <ProjectMilestones />;
  }

  return (
    <div className="container-column">
      <Projects />
    </div>
  );
}

export default ProjectsPage;
