const express = require('express');
const { Pool } = require('pg');

const app = express();

// Replace with your database connection details
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
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

// Other endpoints for CRUD operations...

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});