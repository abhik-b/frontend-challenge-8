const sliderTop = document.querySelector(".card__slider_top");
const used = document.querySelector(".card__used");

setTimeout(() => {
  document.querySelectorAll(".card__icon").forEach((icon) => {
    icon.style.opacity = 1;
  });
}, 300);

const percent = (815 / 1000) * 100;
let isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

if (isLargeScreen) {
  used.style.transform = "translate(-1.5em, -0em)";
} else {
  used.style.transform = "translate(-50%, 1em)";
}

for (let index = 0; index < percent; index++) {
  setTimeout(() => {
    sliderTop.style.width = `${index}%`;
  }, 1000);
}

setTimeout(() => {
  used.style.opacity = 1;
  used.style.transform = isLargeScreen
    ? "translate(-1.5em, -1.5em)"
    : "translate(-50%, 2em)";
}, 1500);

window.addEventListener("resize", () => {
  isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

  used.style.transform = isLargeScreen
    ? "translate(-1.5em, -2em)"
    : "translate(-50%, 2em)";
});
