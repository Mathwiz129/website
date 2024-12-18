const backendURL = 'https://your-vercel-app.vercel.app';

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim()) {
        fetch(`${backendURL}/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then(response => response.json())
        .then(data => {
            const messageElement = document.createElement('div');
            messageElement.textContent = data.message;
            messagesDiv.appendChild(messageElement);
            messageInput.value = '';
        });
    }
}

function fetchMessages() {
    fetch(`${backendURL}/messages`)
        .then(response => response.json())
        .then(messages => {
            messagesDiv.innerHTML = '';
            messages.forEach(msg => {
                const messageElement = document.createElement('div');
                messageElement.textContent = msg.text;
                messagesDiv.appendChild(messageElement);
            });
        });
}

fetchMessages();
