import asyncHandler from "express-async-handler";

// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Todos" });
});

// @desc    Set todo
// @route   POST /api/todos
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please fill up the text field");
  }

  res.status(200).json({ message: "Set Todo" });
});

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Todo ${req.params.id}` });
});

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Todo ${req.params.id}` });
});

export { getTodos, setTodo, updateTodo, deleteTodo };
