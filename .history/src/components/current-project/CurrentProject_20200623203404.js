import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const CurrentProject = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return (
    <div>
      <h1>{selectedProject.name}</h1>
    </div>
  );
};

export default CurrentProject;
