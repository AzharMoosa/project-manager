import React from "react";

const Task = ({ task, toggleComplete, key }) => {
  return (
    <div className='task'>
      <div
        id={key}
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
