import React from "react";

const Task = ({ task, toggleComplete, id }) => {
  return (
    <div className='task'>
      <div
        id={id}
        onClick={toggleComplete}
        className={`bullet-point ${
          task.complete ? "complete" : "not-complete"
        }`}
      ></div>
      <h3>{task.task}</h3>
    </div>
  );
};

export default Task;
