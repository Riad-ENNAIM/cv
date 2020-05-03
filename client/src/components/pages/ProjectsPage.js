import React, { useContext } from 'react';
import Projects from '../projects/Projects';
import ProjectMilestones from '../projects/ProjectMilestones';

import NavbarContext from '../../context/navbar/navbarContext';

const ProjectsPage = () => {
  const navbarContext = useContext(NavbarContext);

  if(navbarContext.isTimeline) {
    return <ProjectMilestones />;
  }

  return (
    <div className="container-column">
      <Projects />
    </div>
  );
}

export default ProjectsPage;
