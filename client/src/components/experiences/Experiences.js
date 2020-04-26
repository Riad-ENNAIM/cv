import React from 'react';
import Experience from './Experience';

const Experiences = () => {
  return (
    <>
      <Experience
        title="Développeur Full-Stack JavaScript"
        company="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
        start="mars 2019"
        location="Ben Guerir - Maroc"
        isCurrent={true}
      />
      <Experience 
        title="Développeur Full-Stack JavaScript"
        company="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
        start="octobre 2019"
        end="mars 2020"
        location="Ben Guerir - Maroc"
        isCurrent={false}
      />
      <Experience
        title="Développeur Full-Stack JavaScript"
        company="Université Mohammed VI Polytechnique (AgriEdge – OCP)"
        end="octobre 2019"
        location="Ben Guerir - Maroc"
      />
      <Experience />
    </>
  );
}

export default Experiences;
