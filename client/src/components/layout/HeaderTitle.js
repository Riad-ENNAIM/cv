import React from 'react';
import PropTypes from 'prop-types';
import riad from '../../images/riad.jpg';

const HeaderTitle = ({ profile }) => {
  return (
    <div className="main-title">
      <img src={riad} alt="Riad ENNAIM" />
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>

      <div className="links container justify-content-center">
        <a href={profile.links[0].path} target="_blank" rel="noopener noreferrer" title={profile.links[0].name}>
          <i className="fab fa-github-square"></i>
        </a>
        <a href={profile.links[1].path} target="_blank" rel="noopener noreferrer" title={profile.links[1].name}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={profile.links[2].path} target="_blank" rel="noopener noreferrer" title={profile.links[2].name}>
          <i className="fas fa-address-card"></i>
        </a>
        <a href="/pdf/Riad-ENNAIM.pdf" target="_blank" rel="noopener noreferrer" title="Télécharger PDF">
          <i className="fas fa-cloud-download-alt"></i>
        </a>
      </div>
    </div>
  );
}

HeaderTitle.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default HeaderTitle;
