import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";
import { ProjectContext } from "../../ProjectContext";
import { Link } from "react-router-dom";

const Project = ({ name, color, project }) => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );

  const [projects, setProjects] = useContext(ProjectContext);

  const updateProjects = () => {
    let updatedArray = [...projects];
    let i;
    updatedArray.map((p) =>
      p.name === selectedProject.name ? (i = projects.indexOf(p)) : null
    );
    updatedArray[i] = selectedProject;
    setProjects(updatedArray);
  };

  return (
    <Link to='/project' style={{ textDecoration: "none", color: "#fff" }}>
      <div className={`project-side ${color}`}>
        <h3
          onClick={() => {
            updateProjects();
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
