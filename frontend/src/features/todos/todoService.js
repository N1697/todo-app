import axios from "axios";

const API_URL = "https://todo-app-r5i6.onrender.com/api/todos/";

//Get todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Create new todo
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, todoData, config);

  return response.data;
};

//Delete todo
const deleteTodo = async (todoID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + todoID, config);

  return response.data;
};

const todoService = {
  createTodo,
  getTodos,
  deleteTodo,
};

export default todoService;
