import React, { useContext } from "react";
import Tool from "./Tool";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const Tools = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return <div className='tools-body'></div>;
};

export default Tools;
