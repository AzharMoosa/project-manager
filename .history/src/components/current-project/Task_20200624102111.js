import React from "react";

const Task = ({ task }) => {
  return (
    <div className='task'>
      {/* <div className='bullet-point'></div> */}
      <h3>{task.task}</h3>
    </div>
  );
};

export default Task;
