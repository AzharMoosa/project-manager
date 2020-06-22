import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      name: "Project Manager",
      overview:
        "A project management application which allows you to plan personal projects and track its progress.  Create detail plans of projects before developing projects.",
      tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      progress: 60,
      tasks: [
        "Create Project Plans",
        "Todo List for Each Project",
        "Track Progress",
        "Priority List",
        "Choose Tools In Each Project",
        "Clean And Simple Design",
        "Use REACT",
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
        "Expenses In And Out",
        "Current Balance",
        "Highest Money Out",
        "Clean And Simple Design",
        "Use REACT",
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
        "Exercise Plan",
        "Diet Plan",
        "Clean And Simple Design",
        "Use REACT",
      ],
      color: "white",
      date: "30/09/2020",
      id: 203234,
    },

    {
      name: "Weather Application",
      overview:
        "A weather application which can track weather and climate. See weather and climate for different locations all around the world.",
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
        "Exercise Plan",
        "Diet Plan",
        "Clean And Simple Design",
        "Use REACT",
      ],
      color: "white",
      date: "30/09/2020",
      id: 203234,
    },
  ]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
