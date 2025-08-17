const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");


function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;


  appendMessage("user", message);
  userInput.value = "";
  // Simulate bot response
  setTimeout(() => {
    const botReply = getBotResponse(message);
    appendMessage("bot", botReply);
  }, 500);
}


function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  msgDiv.innerText = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotResponse(input) {
  const responses = {
    hello: "Hi there! ",
    how: "I'm just a bot, but I'm doing great!",
    bye: "Goodbye! Have a nice day ",
  };
  input = input.toLowerCase();
  for (let key in responses) {
    if (input.includes(key)) return responses[key];
  }
  return "Sorry, I didn't understand that.";
}


// Optional: Send on Enter key
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
}); 
