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
        if (inputMsg.value.length >= 1) new Notification(inputMsg.value);
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

  let selectedBackground = "";

  const menuOptions = () => {
    const optionsContainer = document.querySelector(".options-container");
    const optionsContent = document.querySelector(".options-content");
    optionsContent.style.animation = "aparecerOptions 2s ease"

    const chatName = document.querySelector(".Name-user");
    const barMenu = document.querySelector(".bi");

    const optionsBar = document.createElement("div");

    optionsBar.classList.add("options-bar");

    const titleOptonsBar = document.createElement("h3");
    const closeOptions = document.createElement("i");
    titleOptonsBar.textContent = "Options";
    closeOptions.classList.add("bi");
    closeOptions.classList.add("bi-x-square-fill");

    const containerOptions = document.createElement("section");

    const textIndi = document.createElement("div");
    textIndi.innerHTML = "<span>Selecciona</span> una opcion, por favor";
    textIndi.classList.add("textindicativo");

    const changeBackground = document.createElement("div");
    const changeNameUser = document.createElement("div");
    const changeColorMain = document.createElement("div");

    containerOptions.classList.add("container-options");

    changeBackground.textContent = "Cambiar Fondo";
    changeNameUser.textContent = "Asignar Un Nombre";
    changeColorMain.textContent = "Cambiar Color";

    const sectionChangeContentBackground = document.createElement("div");
    const gridDivider = document.createElement("div");
    sectionChangeContentBackground.classList.add("section-change-content-background");
    gridDivider.classList.add("grid-divider-background");
    const previewBackgroundContainer = document.createElement("div");
    previewBackgroundContainer.classList.add("preview-container");
    const divPreviewBackground = document.createElement("div");
    divPreviewBackground.classList.add("preview-background");
    const backgroundSelect = document.createElement("div");
    backgroundSelect.classList.add("container-background-defaults");
    const background1 = document.createElement("div");
    const background2 = document.createElement("div");
    const background3 = document.createElement("div");
    const background4 = document.createElement("div");
    const background5 = document.createElement("div");
    const background6 = document.createElement("div");
    const background7 = document.createElement("div");
    const background8 = document.createElement("div");
    const saveBackgroundButton = document.createElement("button");
    saveBackgroundButton.textContent = "Guardar";
    saveBackgroundButton.style.width = "90%"
    saveBackgroundButton.setAttribute("title", "Guarda tu fondo");

    // const sectionChangeContentNameUser = document.createElement("div");
    // const sectionChangeContentColorMain = document.createElement("div");

    optionsContainer.appendChild(optionsContent);
    optionsContent.appendChild(optionsBar);

    optionsBar.appendChild(titleOptonsBar);
    optionsBar.appendChild(closeOptions);

    optionsContent.appendChild(containerOptions);
    optionsContent.appendChild(textIndi);
    containerOptions.appendChild(changeBackground);
    containerOptions.appendChild(changeNameUser);
    containerOptions.appendChild(changeColorMain);

    optionsContent.appendChild(sectionChangeContentBackground);
    sectionChangeContentBackground.appendChild(gridDivider);
    previewBackgroundContainer.appendChild(divPreviewBackground);
    previewBackgroundContainer.appendChild(saveBackgroundButton);
    gridDivider.appendChild(previewBackgroundContainer);
    gridDivider.appendChild(backgroundSelect);
    backgroundSelect.appendChild(background1);
    backgroundSelect.appendChild(background2);
    backgroundSelect.appendChild(background3);
    backgroundSelect.appendChild(background4);
    backgroundSelect.appendChild(background5);
    backgroundSelect.appendChild(background6);
    backgroundSelect.appendChild(background7);
    backgroundSelect.appendChild(background8);

    barMenu.addEventListener("click", () => {
      optionsContainer.style.display = "flex";
      optionsContainer.style.alignItems = "center";
      optionsContainer.style.justifyContent = "center";
      optionsContainer.style.animation = "aparecerOptions 2s ease-out forwards"
    });

    closeOptions.addEventListener("click", () => {
      optionsContainer.style.animation = "quit 2s ease forwards"
      setTimeout(() => {
        optionsContainer.style.display = "none"
      }, 2000);
    });

    changeBackground.addEventListener("click", () => {
      textIndi.style.display = "none";
      sectionChangeContentBackground.style.display = "block"
    })

    background1.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background1.jpeg) center"
      selectedBackground = "url(source/backgrounds/background1.jpeg) center";
    });
    background2.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background2.jpeg) center"
      selectedBackground = "url(source/backgrounds/background2.jpeg) center"
    });
    background3.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background3.jpeg) center"
      selectedBackground = "url(source/backgrounds/background3.jpeg) center"
    });
    background4.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background4.jpeg) center"
      selectedBackground = "url(source/backgrounds/background4.jpeg) center"
    });
    background5.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background5.jpeg) center"
      selectedBackground = "url(source/backgrounds/background5.jpeg) center"
    });
    background6.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background6.jpeg) center"
      selectedBackground = "url(source/backgrounds/background6.jpeg) center"
    })
    background7.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background7.jpeg) center"
      selectedBackground = "url(source/backgrounds/background7.jpeg) center"
    });
    background8.addEventListener("click", () => {
      divPreviewBackground.style.background = "url(source/backgrounds/background8.jpeg) center"
      selectedBackground = "url(source/backgrounds/background8.jpeg) center"
    });

    saveBackgroundButton.addEventListener("click", () => {
      chatContainer.style.background = selectedBackground;
    })
  }

  menuOptions();
}

htmlCodeStruct();