import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='progressbar' style={{ width = 60%}}>
      <div>
        <h3>{progress} %</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
