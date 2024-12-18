const messagesDiv = document.getElementById('messages');

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim()) {
        // Send message to the server
        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then(response => response.json())
        .then(data => {
            // Append message to the messages div
            const messageElement = document.createElement('div');
            messageElement.textContent = data.message;
            messagesDiv.appendChild(messageElement);

            // Clear the input
            messageInput.value = '';
        });
    }
}
