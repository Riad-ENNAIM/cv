import React from 'react';
import PropTypes from 'prop-types';

const MilestonePeriod = ({ title, info, type, start, end, isCurrent }) => {
  return (
    <li className={`milestone-period ${isCurrent ? 'current-milestone' : ''}`}>
      <span></span>
      <div>
        <div className="title">{title}</div>
        <div className="info">{info}</div>
        <div className="type">{type}</div>
      </div>
      <span className="number">
        <span>{end}</span>
        <span>{start}</span>
      </span>
    </li>
  );
}

MilestonePeriod.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired
};

MilestonePeriod.defaultProps = {
  title: 'Titre',
  info: 'Expérience',
  type: 'Type',
  start: 'Debut',
  end: 'Fin',
  isCurrent: false
};

export default MilestonePeriod;
