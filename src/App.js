import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

// #1
/*function App() {
  return (
    <div>
      <Header />
      <Greeting />
    </div>
  );
} 
export default App;*/

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="test" />
        <Greeting />
      </div>
    );
  }
}
export default App;
