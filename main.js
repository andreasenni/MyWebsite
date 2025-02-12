let greetings = document.getElementById("greetings");

let myselfSection = document.getElementById("myselfSection");
let myselfLogo = document.getElementById("myselfLogo");
myselfSection.addEventListener("mouseenter", function () {
  myselfLogo.classList.add("focus");
  myselfLogo.classList.add("gira");
  greetings.style.opacity = "0";
});
myselfSection.addEventListener("mouseleave", function () {
  myselfLogo.classList.remove("focus");
  myselfLogo.classList.remove("gira");
  greetings.style.opacity = "1";
});

let workSection = document.getElementById("workSection");
let workLogo = document.getElementById("workLogo");
workSection.addEventListener("mouseenter", function () {
  workLogo.classList.add("focus");
  workLogo.classList.add("gira");
  greetings.style.opacity = "0";
});
workSection.addEventListener("mouseleave", function () {
  workLogo.classList.remove("focus");
  workLogo.classList.remove("gira");
  greetings.style.opacity = "1";
});

let skillsSection = document.getElementById("skillsSection");
let skillsLogo = document.getElementById("skillsLogo");
skillsSection.addEventListener("mouseenter", function () {
  skillsLogo.classList.add("focus");
  skillsLogo.classList.add("gira");
  greetings.style.opacity = "0";
});
skillsSection.addEventListener("mouseleave", function () {
  skillsLogo.classList.remove("focus");
  skillsLogo.classList.remove("gira");
  greetings.style.opacity = "1";
});