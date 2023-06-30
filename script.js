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
}

const htmlCodeStruct = () => {
  const navegationChat = document.querySelector(".navegation");
  const navegationContent = document.createElement("div");

  navegationContent.classList.add("navegation-content");
  const chatName = document.createElement("div");
  const barMenu = document.createElement("i");

  // chatName.setAttribute("contenteditable", "true");
  chatName.classList.add("Name-user")
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

  function notifications() {
    Notification.requestPermission(() => {
      if (Notification.permission == "granted") {
        new Notification(inputMsg.value);
        inputMsg.value = "";
      }
    })
  }

  sendButton.addEventListener("click", () => {
    createNewMsg();
    notifications();
  })

  inputMsg.addEventListener("keypress", (e) => {
    const keyPress = e.key;
    if (keyPress == "Enter") {
      createNewMsg();
      notifications();
    }
  });
}

htmlCodeStruct();

const menuOptions = () => {
  const optionsContainer = document.querySelector(".options-container")
  const optionsContent = document.createElement("div");

  const navegacionContainer = document.querySelector(".navegation");
  const navegationContent = document.querySelector(".navegation-content");
  const chatName = document.querySelector(".Name-user");
  const barMenu = document.querySelector(".bi");

  const optionsBar = document.createElement("div");

  const containerOptions = document.createElement("section");
  // const changeBackground = document.createElement("div");
  // const changeNameUser = document.createElement("div");
  // const changeColorMain = document.createElement("div");

  containerOptions.classList.add("container-options");
  optionsContent.classList.add("options-content");

  optionsBar.classList.add("options-bar");
  const titleOptonsBar = document.createElement("h3");
  const closeOptions = document.createElement("i");

  titleOptonsBar.textContent = "Options";
  closeOptions.classList.add("bi");
  closeOptions.classList.add("bi-x-square-fill");

  optionsContainer.appendChild(optionsContent);

  optionsContent.appendChild(optionsBar);
  optionsBar.appendChild(titleOptonsBar);
  optionsBar.appendChild(closeOptions);


  barMenu.addEventListener("click", () => {
    optionsContainer.style.display = "flex";
    optionsContainer.style.alignItems = "center";
    optionsContainer.style.justifyContent = "center"
  })

  closeOptions.addEventListener("click", () => {
    optionsContainer.style.display = "none";
  })
}

menuOptions()