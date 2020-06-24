import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "This is the overiew",
    tools: [],
    progress: 0,
    tasks: [],
    color: "white",
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
