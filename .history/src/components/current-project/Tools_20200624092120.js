import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const Tools = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return (
    <div className='tools-body'>
      {selectedProject.tools.map((tool) => {
        <Tool />;
      })}
    </div>
  );
};

export default Tools;
