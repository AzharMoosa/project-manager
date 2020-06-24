import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CurrentProject from "./current-project/CurrentProject";

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/project' component={CurrentProject}></Route>
    </Switch>
  );
};

export default Main;
