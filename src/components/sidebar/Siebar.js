import React from "react";
import Header from "./Header";
import ProjectList from "../project-list/ProjectList";

const Siebar = () => {
  return (
    <div className='sidebar'>
      <Header />
      <ProjectList />
    </div>
  );
};

export default Siebar;
