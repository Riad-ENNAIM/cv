import React from 'react';
import Tasks from '../tasks/Tasks';

const Experience = () => {
  return (
    <div class="experience">
      <div class="job-header">
        <h3 class="job-title">Développeur Full-Stack JavaScript</h3>
        <i class="fas fa-chevron-down"></i>
      </div>

      <div class="job-description">
        <h5>
          <span class="job-company">Université Mohammed VI Polytechnique (AgriEdge – OCP) | </span>
          <span class="job-date"> Depuis octobre 2019 | </span>
          <span class="job-location"> Ben Guerir - Maroc</span>
        </h5>
      </div>

      <Tasks />
    </div>
  );
}

export default Experience;
