const messageFormHandler = async function(event) {
    event.preventDefault();

    const nameEl = document.querySelector('#nameInput');
    const emailEl = document.querySelector('#emailInput');
    const messageEl = document.querySelector('#messageInput');

    const response = await fetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify({
            name: nameEl.value,
            email: emailEl.value,
            message: messageEl.value,
        }),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/contact');
    } else {
        alert('Failed to send message');
    }
};

document
    .querySelector('#contact-form')
    .addEventListener('submit', messageFormHandler);