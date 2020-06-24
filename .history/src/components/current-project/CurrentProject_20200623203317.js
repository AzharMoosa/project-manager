import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const CurrentProject = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return <div></div>;
};

export default CurrentProject;
