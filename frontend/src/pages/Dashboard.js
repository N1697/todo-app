import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm.js";
import { reset, getTodos } from "../features/todos/todoSlice.js";
import Spinner from "../components/Spinner.js";
import TodoItem from "../components/TodoItem.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getTodos());
  }, [user, navigate, isError, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Todos Dashboard</p>
      </section>

      <TodoForm />

      <section className="content">
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => {
              return <TodoItem key={todo._id} todo={todo} />;
            })}
          </div>
        ) : (
          <h3>What would you like to do?</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
