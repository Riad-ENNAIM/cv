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
    </div>
  );
}

export default HeaderInfo;
