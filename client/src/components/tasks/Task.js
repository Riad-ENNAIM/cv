import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <div className="task">
      <i className="fas fa-caret-right"></i>
      <p>
        {task.text}
      </p>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
