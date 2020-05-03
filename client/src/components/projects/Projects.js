import React, { useEffect, useContext } from 'react';
import Card from '../cards/Card';
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

  return profile.projects.map(project => {
    const data = {
      title: project.title,
      description: project.client,
      info: project.technology,
      start: project.start,
      end: project.end,
      isCurrent: project.isCurrent,
      notes: project.tasks
    };
    return <Card key={project._id} data={data} />
  });
}

export default Projects;