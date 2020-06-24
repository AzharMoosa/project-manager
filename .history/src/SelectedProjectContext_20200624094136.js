import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "This is the overiew",
    tools: ["Tools"],
    progress: 0,
    tasks: [{ task: "Task", complete: true }],
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
