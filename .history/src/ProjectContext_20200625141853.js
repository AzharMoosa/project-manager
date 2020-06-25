import React, { useState, createContext } from "react";

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
      tasks: [{ task: "Create Project Plans", complete: true, id: 1 }],
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
