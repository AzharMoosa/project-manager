import React, { useState, createContext } from "react";

export const ProjectProvider = () => {
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
        "Track Progress ",
        "Priority List",
        "Choose Tools In Each Project",
      ],
    },
  ]);
};
