import React, { useEffect, useContext } from 'react';
import MilestonePeriod from '../milestones/MilestonePeriod';
import MilestoneAction from '../milestones/MilestoneAction';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const ProjectMilestones = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  if(profile === null || profile.projects === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
  }

  return (
    <ul className="milestone">
      {
        profile.projects.map(experience => {
          const milestone = {
            title: experience.client,
            info: experience.title,
            type: experience.technology,
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

export default ProjectMilestones;