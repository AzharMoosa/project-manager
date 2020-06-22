import React from "react";
import ProgressBar from "./ProgressBar";

const ProgectProgress = ({ name, date, progress }) => {
  return (
    <div className='project-progress'>
      <div className='project-title'>
        <h3>{name}</h3>
        <h3>{date}</h3>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgectProgress;
