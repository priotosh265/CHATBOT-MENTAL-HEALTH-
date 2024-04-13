// // Map of keywords and corresponding solutions
// let keywordSolutions = {
//     "stress": [
//         "Have you tried deep breathing exercises to help manage your stress?",
//         "Remember to prioritize self-care. What activities do you enjoy?"
//     ],
//     "anxiety": [
//         "If you're feeling anxious, try focusing on your senses and grounding yourself in the present moment.",
//         "Engaging in activities that foster a sense of connection and belonging can help combat feelings of anxiety."
//     ],
//     "loneliness": [
//         "Connecting with nature can have a calming and grounding effect on your mood. Consider spending time outdoors if you can.",
//         "Creating a supportive network of friends, family, and trusted individuals can provide valuable emotional support."
//     ],
//     "depression": [
//         "If you're struggling with depression, consider reaching out to a mental health professional for support and guidance.",
//         "Remember that it's okay to ask for help when you're feeling overwhelmed or hopeless."
//     ],
//     "self-care": [
//         "It's essential to prioritize self-care. What activities do you enjoy?",
//         "Remember to reach out to friends or family members for support. Connection is key to well-being."
//     ],
//     "professional help": [
//         "Have you considered seeking professional help from a therapist or counselor? They can provide personalized support and guidance.",
//         "Remember to prioritize your own needs. Saying no is an act of self-care."
//     ],
//     "burnout": [
//         "If you're experiencing burnout, it may be helpful to take a break and engage in activities that recharge you.",
//         "Remember to set boundaries and prioritize your well-being. Your health is more important than any deadline or obligation."
//     ],
//     "motivation": [
//         "If you're struggling with motivation, try breaking tasks down into smaller, more manageable steps.",
//         "Setting realistic goals and celebrating your achievements, no matter how small, can help boost your motivation and confidence."
//     ],
//     "sleep": [
//         "Prioritize sleep and establish a consistent bedtime routine to improve your sleep quality and overall well-being.",
//         "Avoid caffeine and electronic devices before bedtime, as they can interfere with your ability to fall asleep."
//     ],
//     // Add more keywords and corresponding solutions as needed
// };

// // Function to generate a chatbot response based on user's keywords
// function generateChatbotResponse(userInput) {
//     userInput = userInput.toLowerCase();
//     let response = [];

//     // Check for keywords in the user input and add corresponding solutions to the response
//     for (let keyword in keywordSolutions) {
//         if (userInput.includes(keyword)) {
//             response = response.concat(keywordSolutions[keyword]);
//         }
//     }

//     // If no keywords are found, provide a general response
//     // If no keywords are found, provide a general response
// if (response.length === 0) {
//     response.push("Hello, beautiful soul! How can I shower you with love and support today?");
//     response.push("Sending you a virtual hug filled with warmth and comfort. What's on your mind?");
//     response.push("Welcome, dear friend! I'm here to wrap you in a blanket of care and positivity. What can I do for you?");
//     response.push("Hey there, sunshine! Your presence brightens my day. How can I bring some light into yours?");
//     response.push("You are cherished beyond measure, and your well-being is my top priority. How can I lift your spirits?");
//     response.push("Greetings, lovely soul! Let's embark on a journey of self-care and positivity together. How can I assist you on this path?");
//     response.push("Hey, wonderful human! Your strength and resilience inspire me. How can I support you today?");
//     response.push("Welcome to our little corner of positivity and love! Your presence here brings joy to my heart. How can I make your day a little brighter?");
//     response.push("Hello, precious soul! You are a beacon of light in this world, and I'm here to shine alongside you. How can I help?");
//     response.push("Hey, superstar! Your radiance and grace light up the room. How can I be a source of encouragement for you?");
// }

// // Return a random response from the generated list
// return response[Math.floor(Math.random() * response.length)];
// }
// // 
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBotMessages = document.getElementById("chat-bot-messages");
    var userMessage = document.createElement("div");
    userMessage.innerHTML = "<strong>You:</strong> " + userInput;
    chatBotMessages.appendChild(userMessage);
    // You can add your chat bot logic here to generate responses
    document.getElementById("user-input").value = ""; // Clear input field after sending message
}
