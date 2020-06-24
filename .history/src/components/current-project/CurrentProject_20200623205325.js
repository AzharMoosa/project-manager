import React, { useContext } from "react";
import ProgressBar from "../home/ProgressBar";
import Task from "./Task";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const CurrentProject = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return (
    <div className='selected-project'>
      <h1 className='selected-project-title'>{selectedProject.name}</h1>
      <h3>Overview</h3>
      <p>{selectedProject.overview}</p>
      <div className='tools'>
        <h3>Tools</h3>
        <input type='text' className='add-tools' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
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
              fill='#76ffca'
              stroke='#000'
              strokeWidth='2'
            >
              <circle cx='12' cy='12' r='12' stroke='none' />
              <circle cx='12' cy='12' r='11' fill='none' />
            </g>
            <path
              id='icons8-plus'
              d='M6.72,2V6.72H2V7.769H6.72v4.72H7.769V7.769h4.72V6.72H7.769V2Z'
              transform='translate(54.819 246.819)'
              stroke='#404040'
              stroke-width='1'
              fill-rule='evenodd'
            />
          </g>
        </svg>

        <div className='tasks-title'>
          <h3>Tasks</h3>
          <ProgressBar />
        </div>

        <div className='tasks'>
          {/* {selectedProject.tasks.map((task) => (
            <Task />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
