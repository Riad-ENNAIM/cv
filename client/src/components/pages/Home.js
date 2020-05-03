import React, { useContext } from 'react';
import Experiences from '../experiences/Experiences';
import ExperienceMilestones from '../experiences/ExperienceMilestones';

import ProfileContext from '../../context/profile/profileContext';

const Home = () => {
  const profileContext = useContext(ProfileContext);

  if(profileContext.isTimeline) {
    return <ExperienceMilestones />;
  }

  return (
    <div className="container-column">
      <Experiences />
    </div>
  );
}

export default Home;

