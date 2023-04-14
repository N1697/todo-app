import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";

const router = express.Router();

router.route("/").get(protect, getTodos);

router.route("/").post(protect, setTodo);

router.route("/:id").put(protect, updateTodo);

router.route("/:id").delete(protect, deleteTodo);

export default router;
