import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
