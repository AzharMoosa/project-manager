import React from "react";

const Modal = () => {
  return (
    <div className='create-project-popup'>
      <div className='create-project-popup-content'>
        <h1>CREATE PROJECT</h1>
        <form>
          <label htmlFor='title'>PROJECT TITLE</label>
          <input type='text' />
          <label htmlFor='title'>PROJECT OVERVIEW</label>
          <input type='text' />
        </form>
      </div>
    </div>
  );
};

export default Modal;
