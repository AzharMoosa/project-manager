import React, { useState, createContext, useEffect } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  // const [projects, setProjects] = useState(
  //   localStorage.getItem("myValueInLocalStorage") || []
  // );

  const [projects, setProjects] = useState([
    {
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
    },
  ]);

  React.useEffect(() => {
    localStorage.setItem("projects", projects);
  }, [projects]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
