import React from "react";

function TodoItem(props) {
  let c = "completed";
  if (!props.todo.completed) c = "not completed";

  return (
    <div>
      <input type="checkbox" checked={props.todo.completed} />
      <p>{props.todo.text}</p>
      <p>{c}</p>
    </div>
  );
}

export default TodoItem;
