import React from 'react';
import PropTypes from 'prop-types';

const Milestone = ({ title, info, type, start, end }) => {
  return (
    <ul className="milestone">
        <li>
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
      </ul>
  );
}

Milestone.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

Milestone.defaultProps = {
  title: 'Titre',
  info: 'Expérience',
  type: 'Type',
  start: 'Debut',
  end: 'Fin',
};

export default Milestone;