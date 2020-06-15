import React from "react";
import logo from "./logo.svg";
import Joke from "./components/Joke";

function App() {
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
