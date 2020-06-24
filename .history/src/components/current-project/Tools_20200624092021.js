import React from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const Tools = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return <div className='tools-body'></div>;
};

export default Tools;
