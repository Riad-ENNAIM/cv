import React from 'react';
import PropTypes from 'prop-types';
import Tasks from '../tasks/Tasks';

const Experience = ({ title, company, date, location }) => {
  return (
    <div className="experience">
      <div className="job-header">
        <h3 className="job-title">{title}</h3>
        {/* <i className="fas fa-chevron-down"></i> */}
      </div>

      <div className="job-description">
        <span className="job-company">{company}</span>
        <br />
        <span className="job-date tag">{date}</span>
        <span className="job-location tag">{location}</span>
      
        <Tasks />
      </div>

    </div>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

Experience.defaultProps = {
  title: 'Poste',
  company: 'Entreprise',
  date: 'depuis janvier 2020',
  location: 'Marrakech - Maroc'
};

export default Experience;
