import React from 'react';
import riad from '../../images/riad.jpg';

const HeaderTitle = () => {
  return (
    <div className="main-title">
      <img src={riad} alt="Riad ENNAIM" />
      <h1>Riad ENNAIM</h1>
      <h2>Développeur Full-Stack JavaScript</h2>

      <div className="links container justify-content-center">
        <a href="https://github.com/Riad-ENNAIM/" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="https://riad-ennaim.github.io/bio/" target="_blank" rel="noopener noreferrer" title="Site Web"><i className="fas fa-globe"></i></a>
      </div>
    </div>
  );
}

export default HeaderTitle;
