//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1> Welcome to my first react app </h1>
    <p> Im not sure what to say... so here is a list of random items! </p>
    <ul>
      <li>Popcorn</li>
      <li>Ice Cream</li>
      <li>Chocolate</li>
    </ul>
  </div>,
  document.getElementById("root")
);
