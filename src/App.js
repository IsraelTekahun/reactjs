import React from "react";
import ReactDOM from "react-dom";

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let wordDisplay = "in";
    if (!this.state.isLoggedIn) wordDisplay = "out"; //if (this.state.isLoggedIn === true)

    /*two ways*/
    //1. you are currently logged {this.state.isLoggedIn ? "in" : "out"}
    //2. you are currently logged {wordDisplay}

    return (
      <div>
        <h1>you are currently logged {wordDisplay}</h1>
      </div>
    );
  }
}
export default App;
