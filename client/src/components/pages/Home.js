import React, { useContext, useEffect } from 'react';
import Experiences from '../experiences/Experiences';
import ExperienceMilestones from '../experiences/ExperienceMilestones';

import ProfileContext from '../../context/profile/profileContext';

const Home = () => {
  const profileContext = useContext(ProfileContext);

  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

