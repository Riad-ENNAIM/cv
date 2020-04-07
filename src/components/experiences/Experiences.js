import React from 'react';
import Experience from './Experience';

const Experiences = () => {
  return (
    <div class="container-column">
      <Experience 
        title="Développeur Full-Stack JavaScript"
        company="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
        date="Depuis octobre 2019"
        location="Ben Guerir - Maroc"
      />
      <Experience />
      <Experience />
      <Experience />
    </div>
  );
}

export default Experiences;
