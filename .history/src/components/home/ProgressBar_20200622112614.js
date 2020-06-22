import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div style={{ width: `${progress}%` }}></div>
      <h3>{progress} %</h3>
    </div>
  );
};

export default ProgressBar;
