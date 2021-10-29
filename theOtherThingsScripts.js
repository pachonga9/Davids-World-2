console.log("hello world. The script is running.");

var introSound = new Audio("assets/intro.mp3");
let displayArea = document.getElementById("displayArea");
let firstText = document.getElementById("firstText");
let secondText = document.getElementById("secondText");
let theOtherThings = document.getElementById("theOtherThings");
let thirdText = document.getElementById("thirdText");
let fourthText = document.getElementById("fourthText");
let fifthText = document.getElementById("fifthText");
let comingSoon = document.getElementById("comingSoon");
// let hideThese = document.querySelectorAll("hidden");

let myButton = (document.getElementById("myButton").onclick = function () {
  introSound.play();
  firstText.classList.toggle("fade");
  secondText.classList.toggle("fade");
  theOtherThings.classList.toggle("fade");
  thirdText.classList.toggle("fade");
  fourthText.classList.toggle("fade");
  fifthText.classList.toggle("fade");

  setTimeout(function () {
    comingSoon.classList.toggle("fade");
  }, 10000);
});
