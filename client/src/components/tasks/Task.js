import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ text }) => {
  return (
    <div className="task">
      <i className="fas fa-caret-right"></i>
      <p>
        {text}
      </p>
    </div>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired
};

Task.defaultProps = {
  text: 'Nouvelle compétence'
};

export default Task;
