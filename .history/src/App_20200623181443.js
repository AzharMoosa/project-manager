import React from "react";
import Sidebar from "./components/sidebar/Siebar";
import Home from "./components/home/Home";
import Modal from "./components/modal/Modal";
import { ProjectProvider } from "./ProjectContext";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProjectProvider>
        <div className='container'>
          <Sidebar />
          <Home />
          <Modal />
        </div>
      </ProjectProvider>
    </BrowserRouter>
  );
}

export default App;
