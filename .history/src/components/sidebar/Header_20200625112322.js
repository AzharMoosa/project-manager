import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";
import { ProjectContext } from "../../ProjectContext";
import { Link } from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );

  const [projects, setProjects] = useContext(ProjectContext);

  const updateProjects = () => {
    let updatedArray = [...projects];
    let i;
    updatedArray.map((p) =>
      p.name === selectedProject.name ? (i = projects.indexOf(p)) : null
    );
    updatedArray[i] = selectedProject;
    setProjects(updatedArray);
  };

  const displayPopup = () => {
    let popup = document.querySelector(".create-project-popup");
    popup.classList.remove("hide");
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

  return (
    <div>
      <h1 className='title'>PROJECT PLANNER</h1>
      <div className='nav-btns'>
        <div className='home-btn'>
          <Link to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              viewBox='0 0 35 35'
              onClick={() => {updateProjects(); updateProgress();}
            >
              <g
                id='Home_Btn'
                data-name='Home Btn'
                transform='translate(-139 -182)'
              >
                <circle
                  id='Ellipse_1'
                  data-name='Ellipse 1'
                  cx='17.5'
                  cy='17.5'
                  r='17.5'
                  transform='translate(139 182)'
                  fill='#fff'
                />
                <path
                  id='icons8-home'
                  d='M12,2.1,1,12H4v9h6V14h4v7h6V12h3Z'
                  transform='translate(145 187.9)'
                  fill='#ff5a5a'
                />
              </g>
            </svg>
          </Link>
          <h3>HOME</h3>
        </div>

        <div className='create-project-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 35 35'
            onClick={displayPopup}
          >
            <g id='Group_6' data-name='Group 6' transform='translate(-50 -242)'>
              <circle
                id='Ellipse_2'
                data-name='Ellipse 2'
                cx='17.5'
                cy='17.5'
                r='17.5'
                transform='translate(50 242)'
                fill='#fff'
              />
              <path
                id='icons8-plus'
                d='M8.922,2V8.922H2v1.538H8.922v6.922h1.538V10.461h6.922V8.922H10.461V2Z'
                transform='translate(58 250)'
                fill='#ff5a5a'
                stroke='#ff5a5a'
                strokeWidth='2'
                fillRule='evenodd'
              />
            </g>
          </svg>
          <h3>CREATE PROJECT</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
