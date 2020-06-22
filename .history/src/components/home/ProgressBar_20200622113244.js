import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div style={progress >= 0 && <= 10 ? {{width: `${progress}%`}}>
        <h3>{progress} %</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
