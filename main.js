let greetings = document.getElementById("greetings");

let myselfSection = document.getElementById("myselfSection");
let myselfLogo = document.getElementById("myselfLogo");
myselfSection.addEventListener("pointerenter", function () {
  myselfLogo.classList.add("focus", "gira");
  greetings.style.opacity = "0";
});
myselfSection.addEventListener("pointerleave", function () {
  myselfLogo.classList.remove("focus", "gira");
  greetings.style.opacity = "1";
});

let workSection = document.getElementById("workSection");
let workLogo = document.getElementById("workLogo");
workSection.addEventListener("pointerenter", function () {
  workLogo.classList.add("focus", "gira");
  greetings.style.opacity = "0";
});
workSection.addEventListener("pointerleave", function () {
  workLogo.classList.remove("focus", "gira");
  greetings.style.opacity = "1";
});

let skillsSection = document.getElementById("skillsSection");
let skillsLogo = document.getElementById("skillsLogo");
skillsSection.addEventListener("pointerenter", function () {
  skillsLogo.classList.add("focus", "gira");
  greetings.style.opacity = "0";
});
skillsSection.addEventListener("pointerleave", function () {
  skillsLogo.classList.remove("focus", "gira");
  greetings.style.opacity = "1";
});
