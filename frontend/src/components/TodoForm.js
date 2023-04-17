import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todoSlice.js";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTodo({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Todo</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Set Todo
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
