import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar'>
      <div style={progress > 5 ? { width: `${progress}%` } : { width: "5%" }}>
        <h3>{progress} %</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
