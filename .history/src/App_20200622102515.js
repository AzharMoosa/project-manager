import React from "react";
import Sidebar from "./components/sidebar/Siebar";
import Home from "./components/home/Home";
import { ProjectProvider } from "./ProjectContext";

import "./App.css";

function App() {
  return (
    <ProjectProvider>
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </ProjectProvider>
  );
}

export default App;
