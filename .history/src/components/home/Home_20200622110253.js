import React, { useContext } from "react";
import ProgectProgress from "./ProgectProgress";
import ProjectContext from "../../ProjectContext";

const Home = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  return (
    <div className='home'>
      <h1 className='home-title'>ALL PROJECTS</h1>
      <ProgectProgress />
    </div>
  );
};

export default Home;
