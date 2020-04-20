import React from 'react';

const HeaderInfo = () => {
  return (
    <div className="main-info">
      <div className="info-group">
        <i className="fas fa-info"></i>
        <p className="description">
          Développeur full-stack, passionné par la programmation des applications et le développement web, spécialisé principalement dans JavaScript : 
          React.js &amp; Node.js. Je suis également imprégnée d'un fort désir d'apprendre et d'évoluer dans ma vie quotidienne. 
        </p>
      </div>

      <div className="info-group">
        <i className="fas fa-map-marker-alt"></i>
        <p>
          Marrakech, Maroc
        </p>
      </div>

      <div className="info-group">
        <i className="fas fa-envelope"></i>
        <p>
          riad.ennaim@gmail.com
        </p>
      </div>

      <div className="info-group">
        <i className="fas fa-phone-alt"></i>
        <p>
          +212694590864
        </p>
      </div>
  
      <div className="links container justify-content-space-evenly align-items-center">
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter-square"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram-square"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Medium"><i className="fab fa-medium"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Stack Overflow"><i className="fab fa-stack-overflow"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Blog"><i className="fab fa-blogger"></i></a>
        <a href="https://www.linkedin.com/in/riad-ennaim/" target="_blank" rel="noopener noreferrer" title="Site Web"><i className="fas fa-globe"></i></a>
      </div>
    </div>
  );
}

export default HeaderInfo;
