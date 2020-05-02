import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../utils/Rating';

export const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <div className="skill-header container justify-content-space-between">
        <h3 className="skill-title">{skill.title}</h3>

        <Rating />
      </div>

      <div className="skill-content wrapper justify-content-space-between">
        {
          skill.subSkills.map(subSkill => (
            <div className="skill-item" key={subSkill.id}>
              <i className="fas fa-caret-right"></i>
              <p>
                {subSkill.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};

export default Skill;
