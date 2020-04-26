import React from 'react';
import MilestonePeriod from './MilestonePeriod';
import MilestoneAction from './MilestoneAction';

const Milestones = () => {
  return (
    <ul className="milestone">
      <MilestonePeriod
        title="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
        info="Développeur Full-Stack JavaScript"
        type="6 Mois - CDI"
        start="Septembre 2019"
        end="Mars 2020"
        isCurrent={true}
      />
      <MilestoneAction isCurrent={true} />
      <MilestonePeriod />
      <MilestoneAction />
      <MilestonePeriod />
    </ul>
  );
}

export default Milestones;