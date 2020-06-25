import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div
        style={
          progress > 6
            ? { width: `${progress}%` }
            : { width: "6%", backgroundColor: "#fff" }
        }
      >
        <div className='progress-text'>
          <h3>{progress}%</h3>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
