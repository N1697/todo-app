import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import todosRoutes from "./routes/todosRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();
connectDB();

app.use("/api/todos", todosRoutes);
app.use("/api/users", userRoutes);

//========== DEPLOYMENT ==========
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => res.send("Not in production environment"));
}
//========== DEPLOYMENT ==========

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: ${PORT}`);
});
