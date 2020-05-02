import React, { useEffect, useContext } from 'react';
import Experience from './Experience';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Experiences = () => {
  const profileContext = useContext(ProfileContext);
  const { experiences, getExperiences, isLoading } = profileContext;

  useEffect(() => {
    getExperiences();
    // eslint-disable-next-line
  }, []);

  if(experiences === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return experiences.map(experience => <Experience key={experience._id} experience={experience} />);
}

export default Experiences;
