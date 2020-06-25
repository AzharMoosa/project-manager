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
    clearToolsInput();
  };

  const updateTask = () => {
    if (taskInput === "") {
      return;
    }
    let newTask = {
      task: taskInput,
      complete: false,
      id: Math.floor(Math.random() * 100),
    };
    let updatedTasks = [...selectedProject.tasks, newTask];
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      tasks: updatedTasks,
    }));
    clearTaskInput();
  };

  const deleteTask = (e) => {
    let updatedTasks = [...selectedProject.tasks];

    updatedTasks.map((task) =>
      parseInt(task.id) === parseInt(e.target.id)
        ? updatedTasks.splice(updatedTasks.indexOf(task), 1)
        : null
    );

    console.log(updatedTasks);
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      tasks: updatedTasks,
    }));
    updateProgress();
    console.log(selectedProject.tasks);
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
    updateProgress();
    console.log(selectedProject.tasks);
  };

  const clearToolsInput = () => {
    let input = document.querySelector(".add-tools");
    input.value = "";
    setToolInput("");
  };

  const clearTaskInput = () => {
    let input = document.querySelector(".add-task-input");
    input.value = "";
    setTaskInput("");
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

  const updateProgress = () => {
    let updatedTasks = [...selectedProject.tasks];
    let count = 0;
    updatedTasks.map((task) => (task.complete === true ? count++ : null));
    let progress = Math.floor((count / updatedTasks.length) * 100);
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      progress: progress,
    }));
  };

  const updateDate = () => {
    let newDate = document.querySelector(".date-input").value;
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      date: newDate,
    }));
  };

  const updateBulletPoint = (e) => {
    let newColor = e.target.className;
    setSelectedProject((selectedProject) => ({
      ...selectedProject,
      color: newColor,
    }));
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
            deleteTask={deleteTask}
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
          onClick={updateTask}
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
        <input
          className='add-task-input'
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder={"ADD TASK"}
        />
      </div>

      <div className='date'>
        <h3>Date</h3>
        <input
          type='date'
          value={selectedProject.date}
          className='date-input'
          onChange={updateDate}
        />
      </div>

      <div className='bullet-point-selector'>
        <h3>Bullet Point</h3>
        <div className='bullet-point-selector-bg'>
          <div className='project-side blue' onClick={updateBulletPoint}></div>
          <div
            className='project-side yellow'
            onClick={updateBulletPoint}
          ></div>
          <div className='project-side white' onClick={updateBulletPoint}></div>
          <div className='project-side green' onClick={updateBulletPoint}></div>
          <div
            className='project-side purple'
            onClick={updateBulletPoint}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
