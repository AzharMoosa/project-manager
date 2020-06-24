import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      name: "Project Manager",
      overview:
        "A project management application which allows you to plan personal projects and track its progress.  Create detail plans of projects before developing projects.",
      tools: ["HTML | ", "CSS | ", "JAVASCRIPT | ", "REACT | "],
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
    },

    {
      name: "Expense Tracker",
      overview:
        "A expense tracker application which allows you to budget and track your savings.  Track what expenses you have",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      progress: 40,
      tasks: [
        { task: "Expenses In And Out", complete: true },
        { task: "Current Balance", complete: false },
        { task: "Highest Money Out", complete: true },
        { task: "Clean And Simple Design", complete: true },
        { task: "Use REACT", complete: false },
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
      progress: 0,
      tasks: [
        { task: "Exercise Plan", complete: true },
        { task: "Diet Plan", complete: false },
        { task: "Clean And Simple Design", complete: true },
        { task: "Use REACT", complete: false },
      ],
      color: "white",
      date: "30/09/2020",
      id: 203234,
    },

    {
      name: "Weather Application",
      overview:
        "A weather application which can track weather and climate. See weather and climate for different locations all around the world.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "ADOBE XD"],
      progress: 30,
      tasks: [
        { task: "Weather", complete: true },
        { task: "Temp, Humidity, Pressure", complete: false },
        { task: "Clean And Simple Design", complete: true },
        { task: "Use REACT", complete: false },
      ],
      color: "green",
      date: "16/12/2020",
      id: 20327734,
    },

    {
      name: "Battleship",
      overview: "Battleship created in REACT and using Javascript Testing.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "ADOBE XD", "JEST"],
      progress: 100,
      tasks: [
        { task: "Battleship Game", complete: true },
        { task: "Using Testing", complete: false },
        { task: "Clean And Simple Design", complete: true },
        { task: "Use REACT", complete: false },
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
