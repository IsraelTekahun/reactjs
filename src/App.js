import React from "react";
import logo from "./logo.svg";
import Joke from "./components/Joke";
import JokesData from "./JokesData";

function App() {
  //higher order methods example

  //first example
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let doubled = nums.map(function (num) {
    return num * 2;
  });
  console.log(doubled);

  //second example
  doubled = nums.map((num) => {
    return num * 2;
  });

  console.log(doubled);

  //third example, can get rid of '('  num   ')', VS code adds it atuo though
  doubled = nums.map((num) => {
    return num * 2;
  });

  console.log(doubled);

  let jokeComponents;
  //fourth example
  jokeComponents = JokesData.map((joke) => {
    return <Joke question={joke.question} punchLine={joke.punchLine} />;
  });

  //fifth example
  jokeComponents = JokesData.map((joke) => (
    <Joke question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div className="App">
      <Joke
        joke={{
          question: "What two things can you never eat for breakfast?",
        }}
      />
      <Joke
        joke={{
          question: "What gets wetter the more it dries?",
          answer: "A towel.",
        }}
      />
      <Joke
        joke={{
          question:
            "What never asks a question but gets answered all the time?",
          answer: "Your cellphone.",
        }}
      />
      <Joke
        joke={{
          question: "What goes up but never ever comes down?",
          answer: "Your age.",
        }}
      />
      <Joke
        joke={{
          question:
            "A girl fell off a 50-foot ladder but didn’t get hurt. How come?",
          answer: "She fell off the bottom rung.",
        }}
      />
    </div>
  );
}

export default App;
