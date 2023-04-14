import asyncHandler from "express-async-handler";
import Todo from "../models/todoModel.js";
import User from "../models/userModel.js";

// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  //After going through 'protect' middleware, we have 'req.user' which contains a user document
  const todos = await Todo.find({ user: req.user._id });

  res.status(200).json(todos);
});

// @desc    Set todo
// @route   POST /api/todos
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400);
    throw new Error("Please fill up the text field");
  }

  const todo = await Todo.create({
    user: req.user._id,
    text: text,
  });

  res.status(200).json(todo);
});

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  //Get the data from the request
  const { text } = req.body;

  //Find the document with the specified id to check if that id exists
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  //Check if the logged-in user exists
  const user = await User.findById({ _id: req.user._id });

  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }

  //Check if the user of todo matches the logged-in user
  //We cannot compare 2 objects so we need to convert them to string
  if (todo.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //If the id exists, find the document with that id and update it
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      text: text,
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedTodo);
});

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  //Find the document with the specified id to check if that id exists
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  //Check if the logged-in user exists
  const user = await User.findById({ _id: req.user._id });

  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }

  //Check if the user of todo matches the logged-in user
  //We cannot compare 2 objects so we need to convert them to string
  if (todo.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //If the id exists, find the document with that id and delete it
  await Todo.findByIdAndDelete(req.params.id); //await todo.remove();

  res.status(200).json({ id: req.params.id });
});

export { getTodos, setTodo, updateTodo, deleteTodo };
