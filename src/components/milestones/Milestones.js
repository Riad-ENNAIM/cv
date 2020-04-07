import React from 'react';
import Milestone from './Milestone';

const Milestones = () => {
  return (
    <div className="container-column">
    <Milestone
      title="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
      info="Développeur Full-Stack JavaScript"
      type="6 Mois - CDI"
      start="Septembre 2019"
      end="Mars 2020"
    />
    <Milestone />
    <Milestone />
    <Milestone />
    <Milestone />
    </div>
  )
}

export default Milestones;