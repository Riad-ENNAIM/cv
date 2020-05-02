import React, { useEffect, useContext } from 'react';
import Skill from './Skill';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Skills = () => {
  const profileContext = useContext(ProfileContext);
  const { skills, getSkills, isLoading } = profileContext;

  useEffect(() => {
    getSkills();
    // eslint-disable-next-line
  }, []);

  if(skills === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return skills.map(skill => <Skill key={skill._id} skill={skill} />);
}

export default Skills;
