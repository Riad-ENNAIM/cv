import React from 'react';
import PropTypes from 'prop-types';

const MilestoneAction = ({ title, info, type, date, isCurrent }) => {
  return (
    <li className={`milestone-action ${isCurrent ? 'current-milestone' : ''}`}>
      <span className="point"></span>
      <div>
        <div className="title">{title}</div>
        <div className="info">{info}</div>
        <div className="type">{type}</div>
      </div>
      <span className="number">
        <span>{date}</span>
      </span>

      {
        isCurrent ?
          <div className="tag-flash">En cours</div>
        :
          null
      }
    </li>
  );
}

MilestoneAction.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired
};

MilestoneAction.defaultProps = {
  title: 'Titre',
  info: 'Expérience',
  type: 'Type',
  date: 'Date',
  isCurrent: false
};

export default MilestoneAction;
