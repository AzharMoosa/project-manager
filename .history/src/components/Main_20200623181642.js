import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
    </Switch>
  );
};

export default Main;