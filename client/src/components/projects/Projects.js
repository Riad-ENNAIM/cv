import React, { useEffect, useContext } from 'react';
import Experience from '../experiences/Experience';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Projects = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  if(profile === null || profile.projects === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return profile.projects.map(experience => <Experience key={experience._id} experience={experience} />);
}

export default Projects;