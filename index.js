const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory task list
let tasks = [
  { id: 1, text: "Learn HTML", done: false },
  { id: 2, text: "Build REST API", done: false }
];

// GET /tasks - return all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - add a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Task text is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    text,
    done: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
