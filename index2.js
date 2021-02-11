/*global require*/
/*eslint-env es6*/
window.onload = A20;

var adam20 = new Array (
    "20a1.png",
    "20a2.png",
    "20a3.png",
    "20a4.png",
    "20a5.png",
    "20a6.png"
);

function A20() {
    var randomNum = Math.floor(Math.random() * adam20.length);
    document.getElementById("adamTwenty").src = adam20[randomNum];
}