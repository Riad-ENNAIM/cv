import React, { useEffect, useContext } from 'react';
import Experience from '../experiences/Experience';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Projects = () => {
  const profileContext = useContext(ProfileContext);
  const { projects, getProjects, isLoading } = profileContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if(projects === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return projects.map(experience => <Experience key={experience._id} experience={experience} />);
}

export default Projects;