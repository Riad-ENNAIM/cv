import React from 'react';
import PropTypes from 'prop-types';
import Tasks from '../tasks/Tasks';

const Experience = ({ title, company, start, end, location, isCurrent }) => {
  return (
    <div className="experience">
      <div className="job-header">
        <h3 className="job-title">{title}</h3>
        {/* {
          isCurrent ?
          <span>En cours</span>
          :
            null
        } */}
      </div>

      <div className={`job-description ${isCurrent ? 'current-job' : ''}`}>
        <span className="job-company">{company}</span>
        <br />
        {
          start || end ?
            <span className="job-date tag">{ start && !end ? `Depuis ${start}` : start && end ? start : '' } { end && start ? `à ${end}` : end && !start ? end : '' }</span>
          :
            null
        }
        <span className="job-location tag">{location}</span>
      
        <Tasks />
      </div>

    </div>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

Experience.defaultProps = {
  title: 'Poste',
  company: 'Entreprise',
  location: 'Marrakech - Maroc'
};

export default Experience;
