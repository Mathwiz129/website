const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let messages = [];

app.use(bodyParser.json());
app.use(express.static('public'));

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
