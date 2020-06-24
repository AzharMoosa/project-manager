import React, { useContext } from "react";
import ProgectProgress from "./ProjectProgress";
import { ProjectContext } from "../../ProjectContext";

const Home = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useContext(ProjectContext);

  return (
    <div className='home'>
      <h1 className='home-title'>ALL PROJECTS</h1>
      {projects.map((project) => (
        <ProgectProgress
          name={project.name}
          date={project.date}
          progress={project.progress}
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default Home;
