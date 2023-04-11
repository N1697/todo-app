import express from "express";
import dotenv from "dotenv";
import todosRoutes from "./routes/todosRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/todos", todosRoutes);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
