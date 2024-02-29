import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

// The Long Way
// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currentTime = new Date().getHours();

//Simplified Version using Ternary
function App() {
  return (
    <div className="container">
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
      currentTime > 12 && <h1> Why are you still working? </h1>
    </div>
  );
}

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

export default App;
