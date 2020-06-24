import React from "react";
import { Link } from "react-router-dom";

const Project = ({ name, color }) => {
  return (
    <Link to='/project' style={{ textDecoration: "none" }}>
      <div className={`project-side ${color}`}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Project;
