import React, { useEffect, useContext } from 'react';
import Card from '../cards/Card';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Experiences = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  if(profile === null || profile.experiences === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return profile.experiences.map(experience => {
    const data = {
      title: experience.title,
      description: experience.company,
      info: experience.location,
      start: experience.start,
      end: experience.end,
      isCurrent: experience.isCurrent,
      notes: experience.tasks
    };
    return <Card key={experience._id} data={data} />
  });
}

export default Experiences;
