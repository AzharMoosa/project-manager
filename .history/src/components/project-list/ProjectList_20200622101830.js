import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";
import ProjectSide from "./ProjectSide";

const ProjectList = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  return (
    <div>
      {projects.map((project) => (
        <ProjectSide />;
      ))}
    </div>
  );
};

export default ProjectList;
