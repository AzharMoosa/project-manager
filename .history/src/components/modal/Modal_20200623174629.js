import React, { useContext, useState } from "react";
import { ProjectContext } from "../../ProjectContext";

const Modal = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectOverivew, setProjectOverivew] = useState("");

  const createProject = () => {};

  return (
    <div className='create-project-popup'>
      <div className='create-project-popup-content'>
        <h1>CREATE PROJECT</h1>
        <form className='form-input'>
          <label htmlFor='title'>PROJECT TITLE</label>
          <input type='text' onChange={(e) => setProjectTitlte} />
          <label htmlFor='title'>PROJECT OVERVIEW</label>
          <textarea type='text' />
          <button className='create-btn' onClick={createProject}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
