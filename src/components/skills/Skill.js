import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../utils/Rating';

export const Skill = ({ title, subSkills }) => {
  return (
    <div className="skill">
      <div className="skill-header container">
        <h3 className="skill-title">{title}</h3>

        <Rating />
      </div>

      <div className="skill-content container wrapper">
        {
          subSkills.map(skill => (
            <div className="skill-item" key={skill.id}>
              <i className="fas fa-caret-right"></i>
              <p>
                {skill.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  subSkills: PropTypes.array.isRequired
};

Skill.defaultProps = {
  title: 'Skill Title',
  subSkills: [
    {
      id: 1,
      title: 'Skill 1'
    },
    {
      id: 2,
      title: 'Skill 2'
    },
    {
      id: 3,
      title: 'Skill 3'
    }
  ]
};

export default Skill;
