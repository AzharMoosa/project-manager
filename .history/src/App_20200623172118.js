import React from "react";
import Sidebar from "./components/sidebar/Siebar";
import Home from "./components/home/Home";
import Modal from "./components/modal/Modal";
import { ProjectProvider } from "./ProjectContext";

import "./App.css";

function App() {
  return (
    <ProjectProvider>
      <div className='container'>
        <Sidebar />
        <Home />
        <Modal />
      </div>
    </ProjectProvider>
  );
}

export default App;
