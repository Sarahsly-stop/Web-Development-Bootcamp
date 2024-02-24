//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
var React = require("react");
var ReactDOM = require("react-dom");

const name = "Sarah Walters";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1> Welcome to my first react app </h1>
    <p> Created by yours truly... {name} </p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
