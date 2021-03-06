import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const ProgectProgress = ({ name, date, progress }) => {
  return (
    <div className='project-progress'>
      <div className='project-title'>
        <Link to='/project' style={{ textDecoration: "none", color: "#fff" }}>
          <h3>{name}</h3>
        </Link>
        <h4>{date}</h4>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgectProgress;
