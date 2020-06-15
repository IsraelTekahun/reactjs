import React from "react";

function App(props) {
  console.log(props);

  let ans = props.joke.answer;
  //if (!props.joke.answer) {
  //ans = "none";
  //}

  return (
    <div>
      <p>question: {props.joke.question}</p>
      <p style={{ display: props.joke.answer ? "block" : "none" }}> {ans}</p>
      <hr />
    </div>
  );
}

export default App;
