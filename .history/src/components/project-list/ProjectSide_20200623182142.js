import React from "react";
import { Link } from "react-router-dom";

const Project = ({ name, color }) => {
  return (
    <div className={`project-side ${color}`}>
      <h3>{name}</h3>
    </div>
  );
};

export default Project;
