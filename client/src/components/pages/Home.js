import React, { useContext, useEffect, useRef } from 'react';
import Experiences from '../experiences/Experiences';
import ExperienceMilestones from '../experiences/ExperienceMilestones';

import ProfileContext from '../../context/profile/profileContext';

const Home = () => {
  const profileContext = useContext(ProfileContext);

  const pageRef = useRef(null)

  useEffect(() => {
    if(pageRef.current.getBoundingClientRect().top <= 0) {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if(profileContext.isTimeline) {
    return (
      <div className="page container justify-content-center" ref={pageRef}>
        <ExperienceMilestones />
      </div>
    );
  }

  return (
    <div className="page container-column" ref={pageRef}>
      <Experiences />
    </div>
  );
}

export default Home;
