import React from "react";

const Task = ({ task }) => {
  return (
    <div className='task'>
      <div
        className={`bullet-point ${
          task.complete ? "complete" : "not-complete"
        }`}
      ></div>
      <h3>{task.task}</h3>
    </div>
  );
};

export default Task;
