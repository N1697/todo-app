import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import todosRoutes from "./routes/todosRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/todos", todosRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
