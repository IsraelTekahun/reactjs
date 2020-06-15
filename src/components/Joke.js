import React from "react";

function App(props) {
  console.log(props);

  let ans = props.joke.answer;
  //if (!props.joke.answer) {
  //ans = "none";
  //}

  /*two ways to do it*/
  //1. <p style={{ display: props.joke.answer ? "block" : "none" }}> Answer: {ans}</p>
  //2. <p style={{ display: !props.joke.answer && "none" }}> Answer: {ans}</p>

  /*return (
    <div>
      <p>question: {props.joke.question}</p>
      <p style={{ display: !props.joke.answer && "none" }}> Answer: {ans}</p>
      <hr />
    </div>
  );*/

  //thid way and a little more styling of question that does not have answer
  return (
    <div>
      <p style={{ color: !props.joke.answer && "green" }}>
        question: {props.joke.question}
      </p>
      <p style={{ display: !props.joke.answer && "none" }}>Answer: {ans}</p>
      <hr />
    </div>
  );
}

export default App;
