import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Project Manager",
    overview:
      "A project management application which allows you to plan personal projects and track its progress.  Create detail plans of projects before developing projects.",
    tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    progress: 60,
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
