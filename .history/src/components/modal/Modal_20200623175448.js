import React, { useContext, useState } from "react";
import { ProjectContext } from "../../ProjectContext";

const Modal = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOverview, setProjectOverview] = useState("");

  const createProject = (e) => {
    e.preventDefault();
    let newProject = {
      name: projectTitle,
      overview: projectOverview,
      tools: [],
      progress: 0,
      tasks: [],
      color: "white",
      date: "",
      id: Math.floor(Math.random() * 100),
    };

    setProjects((projects) => [...prevArr, prevArr.length + 1]);
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
