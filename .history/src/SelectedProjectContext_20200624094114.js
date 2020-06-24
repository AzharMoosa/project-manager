import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "This is the overiew",
    tools: ["Tools"],
    progress: 0,
    tasks: [
      { task: "Create Project Plans", complete: true },
      { task: "Todo List for Each Project", complete: false },
      { task: "Track Progress", complete: true },
      { task: "Priority List", complete: true },
      { task: "Choose Tools In Each Project", complete: false },
      { task: "Clean And Simple Design", complete: true },
      { task: "Use REACT", complete: false },
    ],
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
