import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item, id) => (
        <TodoItem item={item} key={id} />
      ))}
    </div>
  );
}
export default TodoBoard;
