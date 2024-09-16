document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatOutput = document.getElementById('chat-output');
    
    document.getElementById('user-input').value = '';

    chatOutput.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // const botResponse = `<p><strong>Chatbot:</strong> I'm here to help! What do you need assistance with?</p>`;

    let botResponse = '';
            
    if (userInput.includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
    } 
    else if (userInput.includes('We want to book ticket to visit')) {
        botResponse = 'Sure, I am giving you a price list for different sections of museum.';
    } 
    else if (userInput.includes('Timing')) {
        botResponse = `10:00 AM to 06:00 PM`;
    }
    else{
        botResponse = "I'm here to help! Ask me anything.";
    }
    
    chatOutput.innerHTML += botResponse;

    chatOutput.scrollTop = chatOutput.scrollHeight;
});
