s/*global require*/
/*eslint-env es6*/
window.onload = E20;

var eve20 = new Array (
    "/adamsandeves/20e1.png",
    "/adamsandeves/20e2.png",
    "/adamsandeves/20e3.png",
    "/adamsandeves/20e4.png",
    "/adamsandeves/20e5.png",
    "/adamsandeves/20e6.png"
);

var adam20 = new Array (
    "20a1.png",
    "20a2.png",
    "20a3.png",
    "20a4.png",
    "20a5.png",
    "20a6.png"
);

var eve21 = new Array (
    "21Esw.png",
    "21Esa.png",
    "21Esb.png",
    "21Efw.png",
    "21Efa.png",
    "21Efb.png"
);

var adam21 = new Array (
    "21Asw.png",
    "21Asa.png",
    "21Asb.png",
    "21Afw.png",
    "21Afa.png",
    "21Afb.png"
);

var eve23 = new Array (
    "23Esw.png",
    "23Efw.png",
    "23Esa.png",
    "23Efa.png",
    "23Esb.png",
    "23Efb.png"
);

var adam23 = new Array (
    "23Asw.png",
    "23Afw.png",
    "23Asa.png",
    "23Afa.png",
    "23Asb.png",
    "23Afb.png"
);

function E20() {
    var randomNum = Math.floor(Math.random() * eve20.length);
    document.getElementById("eveTwenty").src = eve20[randomNum];
    
    var randomNum = Math.floor(Math.random() * adam20.length);
    document.getElementById("adamTwenty").src = adam20[randomNum];
    
    var randomNum = Math.floor(Math.random() * eve21.length);
    document.getElementById("eveTwentyOne").src = eve21[randomNum];
    
    var randomNum = Math.floor(Math.random() * adam21.length);
    document.getElementById("adamTwentyOne").src = adam21[randomNum];
    
    var randomNum = Math.floor(Math.random() * adam23.length);
    document.getElementById("adamTwentyThree").src = adam23[randomNum];
    
    var randomNum = Math.floor(Math.random() * eve23.length);
    document.getElementById("eveTwentyThree").src = eve23[randomNum];
}


