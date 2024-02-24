import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(
//<h1 style={{ color: "red" }}>Hello World!</h1>,
// document.getElementById("root")
//);

const customStyle = {
  color: "blue",
  fontSize: "40px",
  border: "1px solid black",
};
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
