import React from 'react';
import Task from './Task';

const Tasks = () => {
  return (
    <div class="container"> 
    <div class="tasks">
      <Task text="Développement d'une application de demande des prestations"/>
      <Task />
      <Task />
      <Task />
    </div>
  </div>
  );
}

export default Tasks;
