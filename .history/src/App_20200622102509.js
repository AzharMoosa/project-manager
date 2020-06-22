import React from "react";
import Sidebar from "./components/sidebar/Siebar";
import Home from "./components/home/Home";
import { ProjectProvider } from "./ProjectContext";

import "./App.css";

function App() {
  return (
    <ProjectProvider></ProjectProvider>
    <div className='container'>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
