const s_left_button = document.getElementById("static_left");
const s_up_button = document.getElementById("static_up");
const s_down_button = document.getElementById("static_down");
const s_right_button = document.getElementById("static_right");
const m_left_button = document.getElementById("moving_left");
const m_up_button = document.getElementById("moving_up");
const m_down_button = document.getElementById("moving_down");
const m_right_button = document.getElementById("moving_right");
const scorebox = document.getElementById("score");
var mover = [9, 9, 9, 9];
var ButtonHeight = 0;
var score = 0;
var loopcntl = [0, 0, 0, 0];
var mode = 0;
const key_press = new Audio("Assests/key_press.mp3");
const helpme = document.getElementById("helpme");

// document.getElementById("helpme").innerHTML=
// document.getElementById("helpme1").innerHTML=
// document.getElementById("helpme2").innerHTML=
// document.getElementById("helpme3").innerHTML=

if (document.documentElement.clientWidth <= 450)
  ButtonHeight = 64 * (100 / document.documentElement.clientHeight);
else ButtonHeight = 128 * (100 / document.documentElement.clientHeight);

window.setTimeout(startgame, 2000);

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

function isColliding(i) {
  if (mover[i] >= 95 - 2 * ButtonHeight) return 1;
  else return 0;
}

function scoresetter() {
  scorebox.innerHTML = score;
}

function Clicker(i) {
  var button;
  if (i == 0) button = m_left_button;
  if (i == 1) button = m_up_button;
  if (i == 2) button = m_down_button;
  if (i == 3) button = m_right_button;
  if (isColliding(i) == 1) {
    mover[i] = 0;
    clearInterval(loopcntl[i]);
    drop_it(button, RandomSpeed(20, 40));
    score++;
    scoresetter();
  } else {
    score--;
    scoresetter();
  }
}

function drop_it(button, speed) {
  var i;

  if (button == m_left_button) i = 0;
  if (button == m_up_button) i = 1;
  if (button == m_down_button) i = 2;
  if (button == m_right_button) i = 3;
  loopcntl[i] = setInterval(function () {
    if (mover[i] >= 100 - ButtonHeight) {
      mover[i] = 9;
      clearInterval(loopcntl[i]);
      drop_it(button, RandomSpeed(20, 40));
    } else {
      button.style.top = mover[i] + "vh";
    }
    mover[i] = mover[i] + speed / 100;
  }, 10);
}

function mode_toggle() {
  if (mode == 0) {
    document.getElementById("mode_toggle").src = "Assests/night.png";
    document.body.style.backgroundImage = "url('assests/night-bg.jpg')";
    document.getElementById("controls").style.color = "white";
    m_left_button.src = "Assests/moving_arrow-left - white.png";
    m_up_button.src = "Assests/moving_arrow-up - white.png";
    m_down_button.src = "Assests/moving_arrow-down - white.png";
    m_right_button.src = "Assests/moving_arrow-right - white.png";

    mode = 1;
  } else {
    document.getElementById("mode_toggle").src = "Assests/day.png";
    document.body.style.backgroundImage = "url('assests/day-bg.jpg')";
    document.getElementById("controls").style.color = "black";
    m_left_button.src = "Assests/moving_arrow-left.png";
    m_up_button.src = "Assests/moving_arrow-up.png";
    m_down_button.src = "Assests/moving_arrow-down.png";
    m_right_button.src = "Assests/moving_arrow-right.png";

    mode = 0;
  }
}

function startgame() {
  drop_it(m_left_button, RandomSpeed(20, 40));
  drop_it(m_up_button, RandomSpeed(20, 40));
  drop_it(m_down_button, RandomSpeed(20, 40));
  drop_it(m_right_button, RandomSpeed(20, 40));
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case "a":
      bpress(s_left_button);
      Clicker(0);
      break;
    case "ArrowUp":
    case "w":
      bpress(s_up_button);
      Clicker(1);
      break;
    case "ArrowDown":
    case "s":
      bpress(s_down_button);
      Clicker(2);
      break;
    case "ArrowRight":
    case "d":
      bpress(s_right_button);
      Clicker(3);
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case "a":
      breset(s_left_button);
      break;
    case "ArrowUp":
    case "w":
      breset(s_up_button);
      break;
    case "ArrowDown":
    case "s":
      breset(s_down_button);
      break;
    case "ArrowRight":
    case "d":
      breset(s_right_button);
      break;
  }
});
