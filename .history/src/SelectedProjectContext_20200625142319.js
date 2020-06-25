import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Welcome",
    overview: "You Project Overview Goes Here",
    tools: ["Tools", "Go", "Here"],
    progress: 0,
    tasks: [
      {
        task: "Create Project By Clicking Button In Sidebar",
        complete: false,
        id: 1,
      },
    ],
    date: "",
    id: Math.floor(Math.random() * 100),
  });

  return (
    <SelectedProjectContext.Provider
      value={[selectedProject, setSelectedProject]}
    >
      {props.children}
    </SelectedProjectContext.Provider>
  );
};
