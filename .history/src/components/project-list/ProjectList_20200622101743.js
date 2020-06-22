import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";
import Project from "./Project";

const ProjectList = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  return <div>{projects.map((project) => {})}</div>;
};

export default ProjectList;
