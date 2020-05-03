import React, { useEffect, useContext } from 'react';
import Experience from './Experience';
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

  return profile.experiences.map(experience => <Experience key={experience._id} experience={experience} />);
}

export default Experiences;
