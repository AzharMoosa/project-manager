import React, { useState, createContext } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = (props) => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Error 404",
    overview: "Create a new project by using the button on the left.",
    tools: ["Error 404"],
    progress: 0,
    tasks: [
      {
        task: "Create a new project by using the button on the left.",
        id: 1,
        complete: false,
      },
    ],
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
