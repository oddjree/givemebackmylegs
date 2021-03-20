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

var eve22 = new Array (
    "adamsandeves/22esw.png",
    "adamsandeves/22efw.png",
    "adamsandeves/22esa.png",
    "adamsandeves/22efa.png",
    "adamsandeves/22esb.png",
    "adamsandeves/22efb.png"
    );

var adam22 = new Array (
    "adamsandeves/22asw.png",
    "adamsandeves/22afw.png",
    "adamsandeves/22asa.png",
    "adamsandeves/22afa.png",
    "adamsandeves/22asb.png",
    "adamsandeves/22afb.png"
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

var eve24 = new Array (
    "adamsandeves/24esw.png",
    "adamsandeves/24efw.png",
    "adamsandeves/24esa.png",
    "adamsandeves/24efa.png",
    "adamsandeves/24esb.png",
    "adamsandeves/24efb.png",
    );

var adam24 = new Array (
    "adamsandeves/24asw.png",
    "adamsandeves/24afw.png",
    "adamsandeves/24asa.png",
    "adamsandeves/24afa.png",
    "adamsandeves/24asb.png",
    "adamsandeves/24afb.png",
    );

var eve25 = new Array (
    "adamsandeves/25esw.png",
    "adamsandeves/25efw.png",
    "adamsandeves/25esa.png",
    "adamsandeves/25efa.png",
    "adamsandeves/25esb.png",
    "adamsandeves/25efb.png",
    );

var adam25 = new Array (
    "adamsandeves/25asw.png",
    "adamsandeves/25afw.png",
    "adamsandeves/25asa.png",
    "adamsandeves/25afa.png",
    "adamsandeves/25asb.png",
    "adamsandeves/25afb.png",
    );

function E20() {
    var randomNum = Math.floor(Math.random() * eve20.length);
    document.getElementById("eveTwenty").src = eve20[randomNum];
    
    var randomNum = Math.floor(Math.random() * adam20.length);
    document.getElementById("adamTwenty").src = adam20[randomNum];

    if (eve20 = 0) {
        var eve21 = 0;
        var eve22 = 0;
        var eve23 = 0;
        var eve24 = 0;
        var eve25 = 0;
    }
    
    document.getElementById("eveTwentyOne").src = eve21;
    
    var randomNum = Math.floor(Math.random() * adam21.length);
    document.getElementById("adamTwentyOne").src = adam21[randomNum];

    document.getElementById("eveTwentyTwo").src = eve22;

    var randomNum = Math.floor(Math.random() * adam22.length);
    document.getElementById("adamTwentyTwo").src = adam22[randomNum];
    
    var randomNum = Math.floor(Math.random() * adam23.length);
    document.getElementById("adamTwentyThree").src = adam23[randomNum];
    
    var randomNum = Math.floor(Math.random() * eve23.length);
    document.getElementById("eveTwentyThree").src = eve23[randomNum];

    var randomNum = Math.floor(Math.random() * adam24.length);
    document.getElementById("adamTwentyFour").src = adam24[randomNum];
    
    var randomNum = Math.floor(Math.random() * eve24.length);
    document.getElementById("eveTwentyFour").src = eve24[randomNum];

    var randomNum = Math.floor(Math.random() * adam25.length);
    document.getElementById("adamTwentyFive").src = adam25[randomNum];
    
    var randomNum = Math.floor(Math.random() * eve25.length);
    document.getElementById("eveTwentyFive").src = eve25[randomNum];
}


