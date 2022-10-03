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

function RandomSpeed(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function bpress(button) {
  button.style.transform = "translateY(0.5vh)";
  button.style.opacity = "0.5";
  key_press.play();
}

function breset(button) {
  button.style.transform = "translateY(0)";
  button.style.opacity = "1";
}

function drop_it(button, speed) {
  var mover = 4;
  setInterval(function () {
    if (mover >= 82) {
      mover = 4;
    } else {
      button.style.top = mover + "vh";
    }
    mover = mover + speed / 1000;
  }, 10);
}

drop_it(m_left_button, RandomSpeed(100, 200));
drop_it(m_up_button, RandomSpeed(100, 200));
drop_it(m_right_button, RandomSpeed(100, 200));
drop_it(m_down_button, RandomSpeed(100, 200));

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
