import React from "react";
import Sidebar from "./components/sidebar/Siebar";
import Main from "./components/Main";
import Modal from "./components/modal/Modal";
import { ProjectProvider } from "./ProjectContext";
import { SelectedProjectProvider } from "./SelectedProjectContext";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProjectProvider>
        <SelectedProjectProvider>

        
        <div className='container'>
          <Sidebar />
          <Main />
          <Modal />
        </div>
      </ProjectProvider>
    </BrowserRouter>
  );
}

export default App;
