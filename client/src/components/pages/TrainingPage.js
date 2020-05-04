import React, { useContext } from 'react';
import Training from '../training/Training';
import TrainingMilestones from '../training/TrainingMilestones';

import ProfileContext from '../../context/profile/profileContext';

const Timeline = () => {
  const profileContext = useContext(ProfileContext);

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