/*global require*/
/*eslint-env es6*/
window.onload = E20;

var eve20 = new Array (
    "adamsandeves/20e1.png",
    "adamsandeves/20e2.png",
    "adamsandeves/20e3.png",
    "adamsandeves/20e4.png",
    "adamsandeves/20e5.png",
    "adamsandeves/20e6.png"
);

var adam20 = new Array (
    "adamsandeves/20a1.png",
    "adamsandeves/20a2.png",
    "adamsandeves/20a3.png",
    "adamsandeves/20a4.png",
    "adamsandeves/20a5.png",
    "adamsandeves/20a6.png"
);

var eve21 = new Array (
    "adamsandeves/21Esw.png",
    "adamsandeves/21Esa.png",
    "adamsandeves/21Esb.png",
    "adamsandeves/21Efw.png",
    "adamsandeves/21Efa.png",
    "adamsandeves/21Efb.png"
);

var adam21 = new Array (
    "adamsandeves/21Asw.png",
    "adamsandeves/21Asa.png",
    "adamsandeves/21Asb.png",
    "adamsandeves/21Afw.png",
    "adamsandeves/21Afa.png",
    "adamsandeves/21Afb.png"
);

var eve23 = new Array (
    "adamsandeves/23Esw.png",
    "adamsandeves/23Efw.png",
    "adamsandeves/23Esa.png",
    "adamsandeves/23Efa.png",
    "adamsandeves/23Esb.png",
    "adamsandeves/23Efb.png"
);

var adam23 = new Array (
    "adamsandeves/23Asw.png",
    "adamsandeves/23Afw.png",
    "adamsandeves/23Asa.png",
    "adamsandeves/23Afa.png",
    "adamsandeves/23Asb.png",
    "adamsandeves/23Afb.png"
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


