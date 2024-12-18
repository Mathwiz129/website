const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow all origins for simplicity

// In-memory storage (replace with a database for persistence)
let messages = [];

// Routes
app.post('/send', (req, res) => {
    const { message } = req.body;
    messages.push(message);
    res.json({ message });
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
