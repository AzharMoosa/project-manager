import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <SelectedProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </SelectedProjectContext.Provider>
  );
};
