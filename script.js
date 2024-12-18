const backendURL = 'https://website-blond-omega.vercel.app';

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
            mode: 'no-cors'
        })
        .then(() => {
            console.log('Message sent');
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messagesDiv.appendChild(messageElement);
            messageInput.value = '';
        })
        .catch(error => console.error('Error:', error));
    }
}

function fetchMessages() {
    fetch(`${backendURL}/messages`, {
        mode: 'no-cors'
    })
    .then(() => {
        console.log('Messages fetched');
    })
    .catch(error => console.error('Error:', error));
}

fetchMessages();
