const s_left_button = document.getElementById("static_left");
const s_up_button = document.getElementById("static_up");
const s_down_button = document.getElementById("static_down");
const s_right_button = document.getElementById("static_right");
const key_press = new Audio("Assests/key_press.mp3");

function bpress(button) {
  button.style.transform = "translateY(0.5vh)";
  button.style.opacity = "0.5";
  key_press.play();
}

function breset(button) {
  button.style.transform = "translateY(0)";
  button.style.opacity = "1";
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      bpress(s_left_button);
      break;
    case "ArrowUp":
      bpress(s_up_button);
      break;
    case "ArrowDown":
      bpress(s_down_button);
      break;
    case "ArrowRight":
      bpress(s_right_button);
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      breset(s_left_button);
      break;
    case "ArrowUp":
      breset(s_up_button);
      break;
    case "ArrowDown":
      breset(s_down_button);
      break;
    case "ArrowRight":
      breset(s_right_button);
      break;
  }
});
