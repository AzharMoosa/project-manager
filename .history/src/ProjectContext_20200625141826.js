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
      tasks: [
        { task: "Create Project Plans", complete: true, id: 1 },
        { task: "Todo List for Each Project", complete: false, id: 2 },
        { task: "Track Progress", complete: true, id: 3 },
        { task: "Priority List", complete: true, id: 4 },
        { task: "Choose Tools In Each Project", complete: false, id: 5 },
        { task: "Clean And Simple Design", complete: true, id: 6 },
        { task: "Use REACT", complete: false, id: 7 },
      ],
      date: "2020-06-26",
      id: 28392,
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
