import React from "react";

const Task = ({ task, toggleComplete, id, deleteTask }) => {
  return (
    <div className='task'>
      <div className='task-name'>
        <div
          id={id}
          onClick={toggleComplete}
          className={`bullet-point ${
            task.complete ? "complete" : "not-complete"
          }`}
        ></div>
        <h3>{task.task}</h3>
      </div>
      <div className='delete-task-btn' onClick={deleteTask} id={id}>
        X
      </div>
    </div>
  );
};

export default Task;
