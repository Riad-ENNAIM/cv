import React, { useContext } from 'react';
import Experiences from '../experiences/Experiences';
import ExperienceMilestones from '../experiences/ExperienceMilestones';

import NavbarContext from '../../context/navbar/navbarContext';

const Home = () => {
  const navbarContext = useContext(NavbarContext);

  if(navbarContext.isTimeline) {
    return <ExperienceMilestones />;
  }

  return (
    <div className="container-column">
      <Experiences />
    </div>
  );
}

export default Home;

