const express = require('express');
const { Pool } = require('pg');

const app = express();

// Configure your PostgreSQL database connection
const pool = new Pool({
  database: 'todolist', // Replace with your PostgreSQL database name (in this case, 'todolist')
  port: 5432, // Default PostgreSQL port
});

app.use(express.json());

// Endpoint to handle adding tasks to the database
app.post('/tasks', async (req, res) => {
  const { task } = req.body;
  try {
    await pool.query('INSERT INTO tasks (task_name) VALUES ($1)', [task]);
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the task' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
