var m1 = document.getElementById("musica01"); 
var audioStatus;

m1.autoplay = true; // tem que habilitar o autoplay primeiro, para funcionar a música.
m1.load();

/*
permitir.addEventListener('click', function() {
    m1.muted = false; // só pra mutar enquanto desenvolve...
    m1.play();
    m1.autoplay = true;
    m1.loop = true;
    document.getElementById("alerta").remove();
    document.getElementById("frontPage").style.visibility = "visible";
    document.getElementById("frontPage").style.animationPlayState = "running";
});
*/

m1.muted = true;
m1.pause();

function permitir(){
    m1.muted = false; // só pra mutar enquanto desenvolve...
    m1.play();
    m1.autoplay = true;
    m1.loop = true;

    if(document.getElementById("alerta")){
        document.getElementById("alerta").remove();
    }

    if(document.getElementById("frontPage")) {
        document.getElementById("frontPage").style.visibility = "visible";
        document.getElementById("frontPage").style.animationPlayState = "running";
    }
    
    document.querySelector(".ligado").style.color = "#0e9efd";
    document.querySelector(".desligado").style.color = "black";
}

function pauseAudio() { 
    m1.pause();
    if(document.getElementById("alerta")){
        document.getElementById("alerta").style.visibility = "hidden";
    }
    if(document.getElementById("frontPage")) {
    document.getElementById("frontPage").style.visibility = "visible";
    document.getElementById("frontPage").style.animationPlayState = "running";
    }
    document.querySelector(".ligado").style.color = "black";
    document.querySelector(".desligado").style.color = "#0e9efd";

}


//audio.src = source;

/*

function playm1(){
    m1.play();
}

function pauseAudio() { 
    m1.pause(); 
} 
*/

