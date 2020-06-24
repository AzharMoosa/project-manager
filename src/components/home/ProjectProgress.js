import React, { useContext } from "react";
import { SelectedProjectContext } from "../../SelectedProjectContext";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const ProgectProgress = ({ name, date, progress, project }) => {
  // eslint-disable-next-line
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  return (
    <div className='project-progress'>
      <div className='project-title'>
        <Link to='/project' style={{ textDecoration: "none", color: "#000" }}>
          <h3 onClick={() => setSelectedProject(project)}>{name}</h3>
        </Link>
        <h4>{date.replace(/-/g, "/")}</h4>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgectProgress;
