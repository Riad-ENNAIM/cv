import React from 'react';
import PropTypes from 'prop-types';
import Tasks from '../tasks/Tasks';

const Experience = ({ title, company, date, location }) => {
  return (
    <div class="experience">
      <div class="job-header">
        <h3 class="job-title">{title}</h3>
        <i class="fas fa-chevron-down"></i>
      </div>

      <div class="job-description">
        <h5>
          <span class="job-company">{company} | </span>
          <span class="job-date">{date} | </span>
          <span class="job-location">{location}</span>
        </h5>
      </div>

      <Tasks />
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
