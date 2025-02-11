let myName = document.getElementById("myName");

let myselfCard = document.getElementById("myselfCard");
let myselfLogo = document.getElementById("myselfLogo");
myselfCard.addEventListener("mouseenter", function () {
  myselfLogo.classList.add("focus");
  myselfLogo.classList.add("gira");
  myName.style.opacity = "0";
});
myselfCard.addEventListener("mouseleave", function () {
  myselfLogo.classList.remove("focus");
  myselfLogo.classList.remove("gira");
  myName.style.opacity = "1";
});

let workCard = document.getElementById("workCard");
let workLogo = document.getElementById("workLogo");
workCard.addEventListener("mouseenter", function () {
  workLogo.classList.add("focus");
  workLogo.classList.add("gira");
  myName.style.opacity = "0";
});
workCard.addEventListener("mouseleave", function () {
  workLogo.classList.remove("focus");
  workLogo.classList.remove("gira");
  myName.style.opacity = "1";
});

let skillsCard = document.getElementById("skillsCard");
let skillsLogo = document.getElementById("skillsLogo");
skillsCard.addEventListener("mouseenter", function () {
  skillsLogo.classList.add("focus");
  skillsLogo.classList.add("gira");
  myName.style.opacity = "0";
});
skillsCard.addEventListener("mouseleave", function () {
  skillsLogo.classList.remove("focus");
  skillsLogo.classList.remove("gira");
  myName.style.opacity = "1";
});