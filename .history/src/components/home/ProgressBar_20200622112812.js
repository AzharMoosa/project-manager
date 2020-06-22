import React from "react";

const ProgressBar = ({ progress }) => {
  if (progress === 0) {
  }
  return (
    <div className='progressbar'>
      <div style={{ width: `${progress}%` }}>
        {" "}
        <h3>{progress} %</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
