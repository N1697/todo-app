import express from "express";
import {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";

const router = express.Router();

router.route("/").get(getTodos);

router.route("/").post(setTodo);

router.route("/:id").put(updateTodo);

router.route("/:id").delete(deleteTodo);

export default router;
