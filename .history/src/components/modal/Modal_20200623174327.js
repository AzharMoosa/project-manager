import React, { useContext, useState } from "react";
import { ProjectContext } from "../../ProjectContext";

const Modal = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [projectTitle, setProjectTitlte] = useState("");
  const [projectOverivew, setProjectTitlte] = useState("");

  return (
    <div className='create-project-popup'>
      <div className='create-project-popup-content'>
        <h1>CREATE PROJECT</h1>
        <form className='form-input'>
          <label htmlFor='title'>PROJECT TITLE</label>
          <input type='text' />
          <label htmlFor='title'>PROJECT OVERVIEW</label>
          <textarea type='text' />
          <button className='create-btn'>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
