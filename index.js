const inputField = document.getElementById("input");
const messagesContainer = document.getElementById("messages");

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

function output(input) {
  try {
    let product = process(input);
    addChatEntry(input, product);
  } catch (err) {
    addChatEntry(input, "Sorry I didn't understand that :/")
  }
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "chatbox__messages__user-message";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.className = "chatbox__messages__bot-message";
  botDiv.innerHTML = `<span>${product}</span>`;
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

function process(input) {
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  console.log(text);
  if (text.length === 0) {
    return "Please enter a valid query!";
  }
  text = text
    .replace(/a|an|the/g, "")
    .replace(/thank you|thanks/g, "thx");
  for (const [key, value] of Object.entries(constantsObject)) {
    if (text.match(key)) {
      let response = value[Math.floor(Math.random() * value.length)];
      return response;
    }
  }
  return `Sorry I don't understand :(`;
}