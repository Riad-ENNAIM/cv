import React, { useContext, useEffect } from 'react';
import Training from '../training/Training';
import TrainingMilestones from '../training/TrainingMilestones';

import ProfileContext from '../../context/profile/profileContext';

const Timeline = () => {
  const profileContext = useContext(ProfileContext);

  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if(profileContext.isTimeline) {
    return <TrainingMilestones />;
  }

  return (
    <div className="container-column">
      <Training />
    </div>
  );
}

export default Timeline;