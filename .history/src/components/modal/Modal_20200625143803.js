import React, { useContext, useState } from "react";
import { ProjectContext } from "../../ProjectContext";

const Modal = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useContext(ProjectContext);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOverview, setProjectOverview] = useState("");

  const hidePopup = () => {
    let popup = document.querySelector(".create-project-popup");
    popup.classList.add("hide");
  };

  const createProject = (e) => {
    if (projectTitle === "") {
      return;
    }
    e.preventDefault();
    let newProject = {
      name: projectTitle,
      overview: projectOverview,
      tools: [],
      progress: 0,
      tasks: [],
      date: "",
      id: Math.floor(Math.random() * 100),
    };
    setProjects((projects) => [...projects, newProject]);
    setProjectTitle("");
    setProjectOverview("");
    clearTitleInput();
    clearOverviewInput();
    hidePopup();
  };

  const clearTitleInput = () => {
    let titleInput = document.querySelector(".title-input");
    titleInput.value = "";
  };

  const clearOverviewInput = () => {
    let overviewInput = document.querySelector(".overview-input");
    overviewInput.value = "";
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("sd");
    }
  };

  return (
    <div className='create-project-popup hide'>
      <div className='create-project-popup-content'>
        <h1>CREATE PROJECT</h1>
        <form className='form-input'>
          <label htmlFor='title'>PROJECT TITLE</label>
          <input
            type='text'
            onChange={(e) => setProjectTitle(e.target.value)}
            className='title-input'
          />
          <label htmlFor='title'>PROJECT OVERVIEW</label>
          <textarea
            type='text'
            onChange={(e) => setProjectOverview(e.target.value)}
            className='overview-input'
          />
          <button
            className='create-btn'
            onClick={createProject}
            onKeyDown={keyPress}
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
