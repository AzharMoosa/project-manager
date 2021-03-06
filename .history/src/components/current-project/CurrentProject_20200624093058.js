import React, { useContext } from "react";
import Task from "./Task";
import { ProjectContext } from "../../ProjectContext";
import { SelectedProjectContext } from "../../SelectedProjectContext";

const CurrentProject = () => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );

  const [projects, setProjects] = useContext(ProjectContext);

  const a = () => {
    const p = projects.filter((project) => project === selectedProject);
  };

  return (
    <div className='selected-project'>
      <h1 className='selected-project-title'>{selectedProject.name}</h1>
      <h3 className='selected-project-heading'>Overview</h3>
      <p>{selectedProject.overview}</p>
      <div className='tools'>
        <div className='tools-head'>
          <h3>Tools</h3>
          <div className='tools-input'>
            <input type='text' className='add-tools' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='add-tool-btn'
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
                  strokeWidth='1'
                  fillRule='evenodd'
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='tools-body'></div>
      </div>

      <h3 className='selected-project-heading'>Tasks</h3>

      <div className='tasks'>
        <Task />
      </div>
    </div>
  );
};

export default CurrentProject;
