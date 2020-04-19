import React from 'react';
import riad from '../../images/riad.jpg';

const HeaderTitle = () => {
  return (
    <div className="main-title">
      <img src={riad} alt="Riad ENNAIM" />
      <h1>Riad ENNAIM</h1>
      <h2>Développeur Full-Stack JavaScript</h2>
    </div>
  );
}

export default HeaderTitle;
