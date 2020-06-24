import React from "react";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
    </Switch>
  );
};

export default Main;
