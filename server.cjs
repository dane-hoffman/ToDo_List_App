const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON requests
app.use(express.static(__dirname + '/dist')); // Serve static files from 'dist' directory

let tasks = [];

app.get('/hello-html', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});


app.post('/api/addTask', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    console.log('Task added:', task);
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid request. Task not provided.' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
