import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function MyInfo() {
  return (
    <div>
      <h1>Israel Tekahun</h1>
      <p>ሰላም፣ እስራኤል ነኝ፡፡ እንኳን ደህና መጡ!</p>
      <p>Below are the places I would like to visit</p>
      <ul>
        <li>Ethiopia</li>
        <li>Ethiopia</li>
        <li>Ethiopia</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
