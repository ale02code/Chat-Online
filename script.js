// !proyecto chat online
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
const contentChat = document.querySelector(".chat-content");

const htmlCodeStruct = () => {
  const typeSend = document.createElement("div");
  let inputMsg = document.createElement("input");
  const sendButton = document.createElement("button");

  typeSend.classList.add("type-send");
  inputMsg.setAttribute("placeholder", "Escribe tu mensaje...");
  sendButton.classList.add("btn-send");

  sendButton.textContent = "Enviar"

  typeSend.appendChild(inputMsg);
  typeSend.appendChild(sendButton);
  contentChat.appendChild(typeSend);
  container.appendChild(typeSend);

  sendButton.addEventListener("click", () => {
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
  })

  inputMsg.addEventListener("keyup", keyPressEnter)
  function keyPressEnter(event) {
    const precionDeTecla = event.key;
    if (precionDeTecla == "Enter") {
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
      }
    } else {
      inputMsg.setAttribute("placeholder", "Minimo una letra...")
      inputMsg.classList.add("animation-text");
      setTimeout(() => {
        inputMsg.classList.remove("animation-text");
        inputMsg.setAttribute("placeholder", "Escribe tu mensaje...");
      }, 2500)
    }

  }

  inputMsg.value = "";
  // return msgContent;
}

htmlCodeStruct()