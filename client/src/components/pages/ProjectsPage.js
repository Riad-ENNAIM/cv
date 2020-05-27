import React, { useContext, useEffect } from 'react';
import Projects from '../projects/Projects';
import ProjectMilestones from '../projects/ProjectMilestones';

import ProfileContext from '../../context/profile/profileContext';

const ProjectsPage = () => {
  const profileContext = useContext(ProfileContext);

  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
