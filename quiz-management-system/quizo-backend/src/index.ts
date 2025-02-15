import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./auth";
import quizRoutes from "./quiz";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/quizzes", quizRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to Quizo Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
