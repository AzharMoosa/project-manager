import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div style={{ width: `${progress}%` }}>{progress}</div>
    </div>
  );
};

export default ProgressBar;
