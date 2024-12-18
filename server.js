const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/messaging-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Message Schema
const messageSchema = new mongoose.Schema({
    text: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://oakesbr.com' // Allow requests from your frontend domain
}));

// Routes
app.post('/send', async (req, res) => {
    const { message } = req.body;
    const newMessage = new Message({ text: message });
    await newMessage.save();
    res.json(newMessage);
});

app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
