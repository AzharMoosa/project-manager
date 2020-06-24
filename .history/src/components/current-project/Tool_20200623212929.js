import React from "react";

const Tool = ({ tools }) => {
  return <div>{`${tools.map((tool) => tool)}`}</div>;
};
export default Tool;
