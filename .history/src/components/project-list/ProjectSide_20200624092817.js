import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";
import { Link } from "react-router-dom";

const Project = ({ name, color, project }) => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );

  return (
    <Link to='/project' style={{ textDecoration: "none", color: "#fff" }}>
      <div className={`project-side ${color}`}>
        <h3
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default Project;
