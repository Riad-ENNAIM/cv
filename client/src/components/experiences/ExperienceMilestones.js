import React, { useEffect, useContext } from 'react';
import MilestonePeriod from '../milestones/MilestonePeriod';
import MilestoneAction from '../milestones/MilestoneAction';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const ExperienceMilestones = () => {
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

  return (
    <ul className="milestone">
      {
        experiences.map(experience => {
          const milestone = {
            title: experience.company,
            info: experience.title,
            type: experience.location,
            start: experience.start,
            isCurrent: experience.isCurrent
          };

          if(experience.end){
            milestone.end = experience.end;
            return <MilestonePeriod key={experience._id} milestone={milestone} />
          }

          return <MilestoneAction key={experience._id} milestone={milestone} />
        })
      }
    </ul>
  );
}

export default ExperienceMilestones;