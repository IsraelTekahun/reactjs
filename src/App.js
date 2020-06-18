import React from "react";

function App() {
  /* three ways */

  //#1
  /*return (
    <div className="App">
      <button
        onClick={function () {
          console.log("clícked");
        }}
      >
        test
      </button>
    </div>
  );*/

  //#2
  /*return (
    <div className="App">
      <button
        onClick={() => {
          console.log("clícked");
        }}
      >
        test
      </button>
    </div>
  );*/

  //#3
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="App">
      <img
        onMouseOver={() => console.log("Hovered!")}
        src="https://www.fillmurray.com/200/100"
      />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
