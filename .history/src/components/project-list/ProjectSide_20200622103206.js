import React from "react";

const Project = ({ name, color }) => {
  return (
    <div className={`project-side ${color}`}>
      <h3>{name}</h3>
    </div>
  );
};

export default Project;
