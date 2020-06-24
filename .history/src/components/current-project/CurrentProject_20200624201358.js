import React, { useContext, useState } from "react";
import Task from "./Task";

import { SelectedProjectContext } from "../../SelectedProjectContext";
import { ProjectContext } from "../../ProjectContext";

const CurrentProject = () => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  const [projects, setProjects] = useContext(ProjectContext);
  const [toolInput, setToolInput] = useState("");
  const [taskInput, setTaskInput] = useState("");

  const modifyOverview = () => {
    let overview = document.querySelector(".overview").value;
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      overview: overview,
    }));
    updateProjects();
  };

  const updateTools = () => {
    if (toolInput === "") {
      return;
    }
    let updatedTools = [...selectedProject.tools, toolInput];
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      tools: updatedTools,
    }));
    updateProjects();
    clearToolsInput();
  };

  const clearToolsInput = () => {
    let input = document.querySelector(".add-tools");
    input.value = "";
    setToolInput("");
  };

  const clearTaskInput = () => {
    let input = document.querySelector(".add-task-input");
    input.value = "";
    setToolInput("");
  };

  const updateProjects = () => {
    let updatedArray = [...projects];
    let i;
    updatedArray.map((p) =>
      p.name === selectedProject.name ? (i = projects.indexOf(p)) : null
    );
    updatedArray[i] = selectedProject;
    setProjects(updatedArray);
  };

  const toggleComplete = (e) => {
    let updatedTasks = [...selectedProject.tasks];
    updatedTasks.map((task) =>
      parseInt(task.id) === parseInt(e.target.id)
        ? (task.complete = !task.complete)
        : null
    );
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      tasks: updatedTasks,
    }));
    updateProjects();
  };

  return (
    <div className='selected-project'>
      <div className='selected-project-head'>
        <h1 className='selected-project-title'>{selectedProject.name}</h1>
        <button className='save-btn' onClick={updateProjects}>
          SAVE
        </button>
      </div>

      <h3 className='selected-project-heading'>Overview</h3>

      <textarea
        type='text'
        className='overview'
        value={selectedProject.overview}
        onChange={modifyOverview}
      />
      <div className='tools'>
        <div className='tools-head'>
          <h3>Tools</h3>
          <div className='tools-input'>
            <input
              type='text'
              className='add-tools'
              onChange={(e) => setToolInput(e.target.value)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='add-tool-btn'
              onClick={updateTools}
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
        <div className='tools-body'>
          <h3>{selectedProject.tools.join(" | ")}</h3>
        </div>
      </div>

      <h3 className='selected-project-heading'>Tasks</h3>

      <div className='tasks'>
        {selectedProject.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>

      <div className='add-tasks'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='52'
          height='52'
          viewBox='0 0 52 52'
          className='add-tasks-btn'
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
              <circle cx='26' cy='26' r='26' stroke='none' />
              <circle cx='26' cy='26' r='25' fill='none' />
            </g>
            <path
              id='icons8-plus'
              d='M12.21,2V12.21H2v2.269H12.21v10.21h2.269V14.479h10.21V12.21H14.479V2Z'
              transform='translate(62.905 254.905)'
              stroke='#404040'
              strokeWidth='1'
              fillRule='evenodd'
            />
          </g>
        </svg>
        <input className='add-task-input' placeholder={"ADD TASK"} />
      </div>
    </div>
  );
};

export default CurrentProject;
