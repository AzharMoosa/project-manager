import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "",
    tools: [],
    progress: 0,
    tasks: [],
    color: "",
    date: "",
    id: 21,
  });

  return (
    <SelectedProjectContext.Provider
      value={[selectedProject, setSelectedProject]}
    >
      {props.children}
    </SelectedProjectContext.Provider>
  );
};
