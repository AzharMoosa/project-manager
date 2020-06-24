import React from "react";

const Tool = ({ tools }) => {
  return <div>{tools.join(", ");}</div>;
};
export default Tool;
