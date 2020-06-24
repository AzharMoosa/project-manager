import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const CurrentProject = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return (
    <div className='selected-project'>
      <h1>{selectedProject.name}</h1>
      <h3>Overview</h3>
    </div>
  );
};

export default CurrentProject;
