// !proyecto chat online
"use strict";

const time = () => {
  const ObjetDate = new Date()
  const [hour, minutes] = [
    ObjetDate.getHours(),
    ObjetDate.getMinutes()
  ]
  let hourComplete = `${hour}:${minutes}`
  return hourComplete;
}

const container = document.querySelector(".container")
const chatContainer = document.querySelector(".chat-container")
const contentChat = document.querySelector(".chat-content");

const createNewMsg = () => {
  let inputMsg = document.querySelector("input");

  if (inputMsg.value.length >= 1) {
    const msgContent = document.createElement("div");
    const msgText = document.createElement("div");
    const msgHour = document.createElement("div");

    msgContent.classList.add("msg");
    msgText.classList.add("msg-text");
    msgHour.classList.add("msg-hour");

    msgText.textContent = inputMsg.value;
    msgHour.textContent = time();

    msgContent.appendChild(msgText);
    msgContent.appendChild(msgHour);
    contentChat.appendChild(msgContent);
  } else {
    inputMsg.setAttribute("placeholder", "Minimo una letra...")
    inputMsg.classList.add("animation-text");
    setTimeout(() => {
      inputMsg.classList.remove("animation-text");
      inputMsg.setAttribute("placeholder", "Escribe tu mensaje...");
    }, 2500)
  }

  inputMsg.value = "";
}

const htmlCodeStruct = () => {
  const navegationChat = document.querySelector(".navegation");
  const navegationContent = document.createElement("div");

  navegationContent.classList.add("navegation-content");
  const chatName = document.createElement("div");
  const barMenu = document.createElement("i");

  chatName.setAttribute("contenteditable", "true");
  chatName.innerHTML = "<h2>Agregar</h2>"
  barMenu.classList.add("bi");
  barMenu.classList.add("bi-list");

  navegationContent.appendChild(chatName);
  navegationContent.appendChild(barMenu);
  navegationChat.appendChild(navegationContent);

  const typeSend = document.createElement("div");
  const inputMsg = document.createElement("input");
  const sendButton = document.createElement("button");

  typeSend.classList.add("type-send");
  inputMsg.setAttribute("placeholder", "Escribe tu mensaje...");
  sendButton.classList.add("btn-send");

  sendButton.textContent = "Enviar"

  typeSend.appendChild(inputMsg);
  typeSend.appendChild(sendButton);
  contentChat.appendChild(typeSend);
  container.appendChild(typeSend);

  sendButton.addEventListener("click", createNewMsg);

  inputMsg.addEventListener("keypress", (e) => {
    const keyPress = e.key;
    if (keyPress == "Enter") createNewMsg();
  })
}

htmlCodeStruct();