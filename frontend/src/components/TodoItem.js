import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice.js";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div>{new Date(todo.createdAt).toLocaleString("en-US")}</div>
      <h2>{todo.text}</h2>
      <button
        className="close"
        onClick={() => {
          dispatch(deleteTodo(todo._id));
        }}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default TodoItem;
