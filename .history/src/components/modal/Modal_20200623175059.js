import React, { useContext, useState } from "react";
import { ProjectContext } from "../../ProjectContext";

const Modal = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOverview, setProjectOverview] = useState("");

  const createProject = () => {
    let updatedArray = [...projects];
    let newProject = {
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
      id: Math.floor(Math.random() * 100),
    };
    updatedArray.push();
  };

  return (
    <div className='create-project-popup'>
      <div className='create-project-popup-content'>
        <h1>CREATE PROJECT</h1>
        <form className='form-input'>
          <label htmlFor='title'>PROJECT TITLE</label>
          <input
            type='text'
            onChange={(e) => setProjectTitle(e.target.value)}
          />
          <label htmlFor='title'>PROJECT OVERVIEW</label>
          <textarea
            type='text'
            onChange={(e) => setProjectOverview(e.target.value)}
          />
          <button className='create-btn' onClick={createProject}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
