import express from "express";

const router = express.Router();

// Hardcoded login credentials
const users = [
  { username: "teacher", password: "password123" }
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

export default router;
