import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

const loader = (element) => {
  // Ensure that it is empty at the start
  element.textContent = "";

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator every 300ms
    element.textContent += ".";

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
};

