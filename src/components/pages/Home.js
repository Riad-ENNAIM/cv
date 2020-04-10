import React, { useContext, useEffect } from 'react';
import Experiences from '../experiences/Experiences';
import Milestones from '../milestones/Milestones';

import NavbarContext from '../../context/navbar/navbarContext';

const Home = () => {
  const navbarContext = useContext(NavbarContext);
  const { isTimeline, setActiveTab } = navbarContext;

  useEffect(() => {
    setActiveTab('experiences');
    // eslint-disable-next-line
  }, []);

  if(isTimeline) {
    return (
      <div className="page container-column justify-content-center align-items-center">
        <Milestones />
      </div>
    );
  }

  return (
    <div className="page container-column">
      <Experiences />
    </div>
  );
}

export default Home;

