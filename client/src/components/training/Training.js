import React, { useEffect, useContext } from 'react';
import MilestonePeriod from '../milestones/MilestonePeriod';
import MilestoneAction from '../milestones/MilestoneAction';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Training = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  if(profile === null || profile.trainings === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return (
    <ul className="milestone">
      {
        profile.trainings.map(training => {
          const milestone = {
            title: training.school,
            info: training.title,
            type: training.location,
            start: training.start,
            isCurrent: training.isCurrent
          };

          if(training.end){
            milestone.end = training.end;
            return <MilestonePeriod key={training._id} milestone={milestone} />
          }

          return <MilestoneAction key={training._id} milestone={milestone} />
        })
      }
    </ul>
  );
}

export default Training;