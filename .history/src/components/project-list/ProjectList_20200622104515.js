import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";
import ProjectSide from "./ProjectSide";

const ProjectList = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useContext(ProjectContext);

  return (
    <div>
      {projects.map((project) => (
        <ProjectSide name={project.name} color={project.color} key={} />
      ))}
    </div>
  );
};

export default ProjectList;
