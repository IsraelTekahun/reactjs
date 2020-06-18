import React from "react";

/*function TodoItem(props) {
  let c = "completed";
  if (!props.todo.completed) c = "not completed";

  return (
    <div>
      <input type="checkbox" checked={props.todo.completed} />
      <p>{props.todo.text}</p>
      <p>{c}</p>
      <hr />
    </div>
  );
}

export default TodoItem;*/

class TodoItem extends React.Component {
  constructor(props) {
    console.log(props.todo.completed);

    super();
    this.state = {
      text: props.todo.text,
      completed: props.todo.completed,
    };
  }

  render() {
    let c = "completed";
    if (!this.state.completed) c = "not completed";

    return (
      <div>
        <input type="checkbox" checked={this.state.completed} />
        <p>{this.state.text}</p>
        <p>{c}</p>
        <hr />
      </div>
    );
  }
}

export default TodoItem;
