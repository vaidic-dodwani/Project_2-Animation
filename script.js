const s_left_button = document.getElementById("static_left");
const s_up_button = document.getElementById("static_up");
const s_down_button = document.getElementById("static_down");
const s_right_button = document.getElementById("static_right");
const m_left_button = document.getElementById("moving_left");
const m_up_button = document.getElementById("moving_up");
const m_down_button = document.getElementById("moving_down");
const m_right_button = document.getElementById("moving_right");
const key_press = new Audio("Assests/key_press.mp3");
const helpme = document.getElementById("helpme");
var mover = 0;

function bpress(button) {
  button.style.transform = "translateY(0.5vh)";
  button.style.opacity = "0.5";
  key_press.play();
}

function breset(button) {
  button.style.transform = "translateY(0)";
  button.style.opacity = "1";
}

function convertPXToVW(px) {
  return px * (100 / document.documentElement.clientWidth);
}
const iconsize = convertPXToVW(128);

// function falling(button) {
//   if (mover >= 50) {
//     mover = 0;
//   } else {
//     button.style.top = mover + "vh";
//   }
//   mover = mover + 1;
// }

function drop_it(button) {
  setInterval(function () {
    if (mover >= 80) {
      mover = 0;
    } else {
      button.style.top = mover + "vh";
    }
    mover = mover + 1;
  }, 50);
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      bpress(s_left_button);
      drop_it(m_left_button, 0);
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
