import React, { useContext } from 'react';
import Projects from '../projects/Projects';
import ProjectMilestones from '../projects/ProjectMilestones';

import ProfileContext from '../../context/profile/profileContext';

const ProjectsPage = () => {
  const profileContext = useContext(ProfileContext);

  if(profileContext.isTimeline) {
    return <ProjectMilestones />;
  }

  return (
    <div className="container-column">
      <Projects />
    </div>
  );
}

export default ProjectsPage;
