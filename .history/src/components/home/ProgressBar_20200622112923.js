import React from "react";

const ProgressBar = ({ progress }) => {
  const progressWidth = () => {
    if (progress === 0) {
    }

    return progress;
  };
  return (
    <div className='progressbar'>
      <div style={{ progressWidth }}>
        {" "}
        <h3>{progress} %</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
