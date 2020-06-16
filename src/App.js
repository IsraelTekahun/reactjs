import React from "react";

import Joke from "./components/Joke";
import JokesData from "./JokesData";

function App() {
  const jokeComponents = JokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div>{jokeComponents}</div>;
}

export default App;
