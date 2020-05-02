import React from 'react';
import PropTypes from 'prop-types';
import Tasks from '../tasks/Tasks';

const Experience = ({ experience }) => {

  const displayDate = (date) => {
    // const engMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const frMonthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const d = new Date(date);

    if(d.getFullYear() === new Date().getFullYear())
      return `${d.getDate()} ${frMonthNames[d.getMonth()]}`;

    return `${d.getDate()} ${frMonthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  return (
    <div className="experience">
      <div className="job-header">
        <h3 className="job-title">{experience.title}</h3>
        {
          experience.isCurrent && <span className="tag-flash">En cours</span>
        }
      </div>

      <div className="job-description">
        <span className="job-company">{experience.company}</span>
        <br />
        {
          experience.start || experience.end ?
            <span className="job-date tag">
              { experience.start && !experience.end ? `Depuis ${displayDate(experience.start)}` : experience.start && experience.end ? displayDate(experience.start) : '' } 
              { experience.end && experience.start ? ` à ${displayDate(experience.end)}` : experience.end && !experience.start ? displayDate(experience.end) : '' }
            </span>
          :
            null
        }
        <span className="job-location tag">{experience.location}</span>
      
        <Tasks tasks={experience.tasks} />
      </div>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default Experience;
