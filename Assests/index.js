const welcome = document.getElementById("welcome");
const instructions = document.getElementById("instructions");
const rules = document.getElementById("rules");
const go = document.getElementById("go");
const atb = document.getElementById("atb");
var screen = 1;

function fade_in(thing) {
  let opacity = 0;
  thing.style.opacity = opacity;
  thing.style.display = "block";

  let id = setInterval(function () {
    opacity += 0.0625;
    thing.style.opacity = opacity;

    if (opacity == 1) clearInterval(id);
  }, 50);
}

function fade_out(thing) {
  let opacity = 1;
  thing.style.opacity = opacity;

  let id = setInterval(function () {
    opacity -= 0.0625;
    thing.style.opacity = opacity;

    if (opacity == 0) {
      thing.style.display = "none";
      clearInterval(id);
    }
  }, 50);
}

function gosecond() {
  fade_out(welcome);
  window.setTimeout(function () {
    fade_in(rules);
    fade_in(instructions);
    fade_in(go);
  }, 800);
  screen = 2;
}

function gothird() {
  fade_out(rules);
  fade_out(instructions);
  fade_out(go);
  window.setTimeout(function () {
    fade_in(atb);
  }, 800);

  window.setTimeout(function () {
    fade_out(atb);
  }, 3800);

  window.setTimeout(function () {
    window.open("game.html", "_self");
  }, 4600);
  screen = 3;
}

window.addEventListener("keydown", function () {
  if (screen == 1) {
    gosecond();
  }
});
