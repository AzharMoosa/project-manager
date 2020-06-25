import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      name: "Project Manager",
      overview:
        "A project management application which allows you to plan personal projects and track its progress.  Create detail plans of projects before developing projects.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      progress: 57,
      tasks: [
        { task: "Create Project Plans", complete: true, id: 1 },
        { task: "Todo List for Each Project", complete: false, id: 2 },
        { task: "Track Progress", complete: true, id: 3 },
        { task: "Priority List", complete: true, id: 4 },
        { task: "Choose Tools In Each Project", complete: false, id: 5 },
        { task: "Clean And Simple Design", complete: true, id: 6 },
        { task: "Use REACT", complete: false, id: 7 },
      ],
      color: "blue",
      date: "2020-06-26",
      id: 28392,
    },

    {
      name: "Expense Tracker",
      overview:
        "A expense tracker application which allows you to budget and track your savings.  Track what expenses you have.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      progress: 60,
      tasks: [
        { task: "Expenses In And Out", complete: true, id: 1 },
        { task: "Current Balance", complete: false, id: 2 },
        { task: "Highest Money Out", complete: true, id: 3 },
        { task: "Clean And Simple Design", complete: true, id: 4 },
        { task: "Use REACT", complete: false, id: 5 },
      ],
      color: "yellow",
      date: "",
      id: 2032,
    },

    {
      name: "Fitness Application",
      overview:
        "A fitness application which can track workouts and meal plans. Plan exercise routines and meal plans all in one hub.",
      tools: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "NODEJS",
        "EXPRESS",
        "MONGODB",
      ],
      progress: 50,
      tasks: [
        { task: "Exercise Plan", complete: true, id: 1 },
        { task: "Diet Plan", complete: false, id: 2 },
        { task: "Clean And Simple Design", complete: true, id: 3 },
        { task: "Use REACT", complete: false, id: 4 },
      ],
      color: "white",
      date: "2020-09-30",
      id: 203234,
    },

    {
      name: "Weather Application",
      overview:
        "A weather application which can track weather and climate. See weather and climate for different locations all around the world.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "ADOBE XD"],
      progress: 50,
      tasks: [
        { task: "Weather", complete: true, id: 1 },
        { task: "Temp, Humidity, Pressure", complete: false, id: 2 },
        { task: "Clean And Simple Design", complete: true, id: 3 },
        { task: "Use REACT", complete: false, id: 4 },
      ],
      color: "green",
      date: "2020-16-12",
      id: 20327734,
    },

    {
      name: "Battleship",
      overview: "Battleship created in REACT and using Javascript Testing.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "ADOBE XD", "JEST"],
      progress: 100,
      tasks: [
        { task: "Battleship Game", complete: true, id: 1 },
        { task: "Using Testing", complete: true, id: 2 },
        { task: "Clean And Simple Design", complete: true, id: 3 },
        { task: "Use REACT", complete: true, id: 4 },
      ],
      color: "purple",
      date: "",
      id: 2027734,
    },
  ]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
