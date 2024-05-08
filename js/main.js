// Toogle class active

const actv = document.querySelector(".nvbr-nav");

document.querySelector(`#menu`).onclick = () => {
  actv.classList.toggle(`active`);
};

// klik luar menu
const mn = document.querySelector(`#menu`);

document.addEventListener("click", function (e) {
  if (!mn.contains(e.target) && !actv.contains(e.target)) {
    actv.classList.remove(`active`);
  }
});
