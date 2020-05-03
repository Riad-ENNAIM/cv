import React from 'react';
import PropTypes from 'prop-types';
import useFormatDate from '../../hooks/useFormatDate';
import Tasks from '../tasks/Tasks';

const Experience = ({ experience }) => {
  const start = useFormatDate(experience.start);
  const end = useFormatDate(experience.end);

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
              { experience.start && !experience.end ? `Depuis ${start}` : experience.start && experience.end ? start : '' } 
              { experience.end && experience.start ? ` à ${end}` : experience.end && !experience.start ? end : '' }
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
