import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item" style={{ backgroundColor: "yellow" }}>
      {props.item}
    </div>
  );
}

export default TodoItem;
