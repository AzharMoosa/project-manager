import { useContext } from "react";
import { SelectedProjectContext } from "./SelectedProjectContext";
import { ProjectContext } from "../ProjectContext";

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

export default updateProjects;
