import React from 'react';
import Task from './Task';

const Experience = () => {
  return (
    <div class="experience">
      <div class="job-header">
        <h3 class="job-title">Développeur Full-Stack JavaScript</h3>
        <i class="fas fa-chevron-down"></i>
      </div>

      <div class="job-description">
        <h5>
          <i class="fas fa-pen-nib"></i>
          <span class="job-company">Université Mohammed VI Polytechnique (AgriEdge – OCP) | </span>
          <span class="job-date"> Depuis octobre 2019 | </span>
          <span class="job-location"> Ben Guerir - Maroc</span>
        </h5>
      </div>

      <div class="container"> 
        <div class="tasks">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Experience;
