import React, { useEffect } from 'react';
import Skills from '../skills/Skills';

const SkillsPage = () => {
  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="wrapper justify-skills">
      <Skills />
    </div>
  );
}

export default SkillsPage;
