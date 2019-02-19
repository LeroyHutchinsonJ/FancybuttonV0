import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="middle">
      <h1>Welcome To React Button Creation 101</h1>
      <h2>Good Stuff</h2>
      <button className="btn ">
        <div className="Click"> Click Me </div>{" "}
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
