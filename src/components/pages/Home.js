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
    return <Milestones />;
  }

  return (
    <div className="container-column">
      <Experiences />
    </div>
  );
}

export default Home;

