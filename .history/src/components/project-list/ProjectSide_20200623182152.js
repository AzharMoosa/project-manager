import React from "react";
import { Link } from "react-router-dom";

const Project = ({ name, color }) => {
  return (
    <Link>
      <div className={`project-side ${color}`}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Project;
