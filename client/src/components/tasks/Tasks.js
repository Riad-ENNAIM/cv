import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({tasks}) => {
  return (
    <div className="tasks">
      {
        tasks.map(task => <Task key={task._id} task={task} />)
      }
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
