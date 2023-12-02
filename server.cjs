const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON requests
app.use(express.static(__dirname + '/dist')); // Serve static files from 'dist' directory

app.get('/hello-html', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
