import express from "express";
import db from "./db";

const router = express.Router();

// Create a quiz
router.post("/", async (req, res) => {
  const { title, description, teacher_id } = req.body;
  await db("quizzes").insert({ title, description, teacher_id });
  res.json({ message: "Quiz created!" });
});

// Get all quizzes
router.get("/", async (req, res) => {
  const quizzes = await db("quizzes").select("*");
  res.json(quizzes);
});

// Get a single quiz
router.get("/:id", async (req, res) => {
  const quiz = await db("quizzes").where({ id: req.params.id }).first();
  res.json(quiz);
});

// Update a quiz
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  await db("quizzes").where({ id: req.params.id }).update({ title, description });
  res.json({ message: "Quiz updated!" });
});

// Delete a quiz
router.delete("/:id", async (req, res) => {
  await db("quizzes").where({ id: req.params.id }).del();
  res.json({ message: "Quiz deleted!" });
});

export default router;
