import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";
import ProjectSide from "./ProjectSide";

const ProjectList = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  // eslint-disable-next-line
  return (
    <div>
      {projects.map((project) => (
        <ProjectSide name={project.name} color={project.color} />
      ))}
    </div>
  );
};

export default ProjectList;
