import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "This is the overiew",
    tools: ["Tools"],
    progress: 0,
    tasks: [{ task: "Create Project Plans", complete: true }],
    color: "blue",
    date: "26/06/2020",
    id: 28392,
  });

  return (
    <SelectedProjectContext.Provider
      value={[selectedProject, setSelectedProject]}
    >
      {props.children}
    </SelectedProjectContext.Provider>
  );
};
