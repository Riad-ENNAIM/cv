import React, { useEffect, useContext } from 'react';
import Skill from './Skill';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Skills = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  if(profile === null || profile.skills === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return profile.skills.map(skill => <Skill key={skill._id} skill={skill} />);
}

export default Skills;
