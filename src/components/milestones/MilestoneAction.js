import React from 'react';
import PropTypes from 'prop-types';

const MilestoneAction = ({ title, info, type, date }) => {
  return (
    <ul className="milestone milestone-action">
        <li>
          <span className="point"></span>
          <div>
            <div className="title">{title}</div>
            <div className="info">{info}</div>
            <div className="type">{type}</div>
          </div>
          <span className="number">
            <span>{date}</span>
          </span>
        </li>
      </ul>
  );
}

MilestoneAction.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

MilestoneAction.defaultProps = {
  title: 'Titre',
  info: 'Expérience',
  type: 'Type',
  date: 'Date'
};

export default MilestoneAction;
