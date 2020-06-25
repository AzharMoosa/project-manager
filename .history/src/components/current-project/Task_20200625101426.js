import React from "react";

const Task = ({ task, toggleComplete, id, deleteTask }) => {
  return (
    <div className='task'>
      <div className='task-name'>
        <div
          id={id}
          onClick={toggleComplete}
          className={`bullet-point ${
            task.complete ? "complete" : "not-complete"
          }`}
        ></div>
        <h3>{task.task}</h3>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='33'
          viewBox='0 0 33 33'
          className='delete-task-btn'
        >
          <g
            id='Add_Tool_Btn'
            data-name='Add Tool Btn'
            transform='translate(-49.866 -241.866)'
          >
            <g
              id='Ellipse_2'
              data-name='Ellipse 2'
              transform='translate(49.866 241.866)'
              fill='#ff5a5a'
              stroke='#000'
              stroke-width='2'
            >
              <circle cx='16.5' cy='16.5' r='16.5' stroke='none' />
              <circle cx='16.5' cy='16.5' r='15.5' fill='none' />
            </g>
            <path
              id='icons8-plus'
              d='M6.45,0V6.45H0V7.884H6.45v6.45H7.884V7.884h6.45V6.45H7.884V0Z'
              transform='translate(56.399 258.534) rotate(-45)'
              fill='#fff'
              stroke='#fff'
              stroke-width='1'
              fill-rule='evenodd'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Task;
