import React, { useContext } from "react";
import { SelectedProjectContext } from "../../ProjectContext";
import { Link } from "react-router-dom";

const Project = ({ name, color }) => {
  const [selectedProject, setSelectedProject] = useContext();

  return (
    <Link to='/project' style={{ textDecoration: "none", color: "#fff" }}>
      <div className={`project-side ${color}`}>
        <h3 onClick={}>{name}</h3>
      </div>
    </Link>
  );
};

export default Project;
