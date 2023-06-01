let slideActif = 1;
const maxSlide = 7;
const flecheG = document.querySelector("#gaucheF");
const flecheD = document.querySelector("#droiteF");

document.querySelector("#Java").onclick = function(){
    slideActif = 2;
    console.log(slideActif);
    document.getElementById(slideActif).style.display= "block";
    document.querySelector(".choix").style.display= "none";
    flecheD.style.visibility = "visible";
    flecheG.style.visibility = "visible";
}

document.querySelector("#SQL").onclick = function(){
    slideActif = 4;
    console.log(slideActif);
    document.getElementById(slideActif).style.display= "block";
    document.querySelector(".choix").style.display= "none";
    flecheD.style.visibility = "visible";
    flecheG.style.visibility = "visible";
}

document.querySelector("#HTML").onclick = function(){
    slideActif = 5;
    console.log(slideActif);
    document.getElementById(slideActif).style.display= "block";
    document.querySelector(".choix").style.display= "none";
    flecheD.style.visibility = "visible";
    flecheG.style.visibility = "visible";
}

document.querySelector("#Gestion").onclick = function(){
    slideActif = 7;
    console.log(slideActif);
    document.getElementById(slideActif).style.display= "block";
    document.querySelector(".choix").style.display= "none";
    flecheD.style.visibility = "hidden";
    flecheG.style.visibility = "visible";
}

document.querySelector("#Systeme").onclick = function(){
    slideActif = 6;
    console.log(slideActif);
    document.getElementById(slideActif).style.display= "block";
    document.querySelector(".choix").style.display= "none";
    flecheD.style.visibility = "visible";
    flecheG.style.visibility = "visible";
}

document.querySelector("#droiteF").onclick = function(){

    slideActif = slideActif + 1;

    if(slideActif > 1){
        flecheG.style.visibility = "visible";
    }
    let slideToShow = document.getElementById(slideActif);
    let slideToHide = document.getElementById(slideActif-1);
    slideToShow.style.display= "block";
    slideToHide.style.display = "none";

    if(slideActif >= maxSlide){
        flecheD.style.visibility = "hidden";
    } else {
        flecheD.style.visibility = "visible";
    }
    if(slideActif <= 1){
        flecheG.style.visibility = "hidden";
    } else {
        flecheG.style.visibility = "visible";
    }
}

document.querySelector("#gaucheF").onclick = function(){

    slideActif = slideActif - 1;

    if(slideActif <= 1){
        flecheG.style.visibility = "hidden";
    } else {
        flecheG.style.visibility = "visible";
    }
    if(slideActif >= maxSlide){
        flecheD.style.visibility = "hidden";
    } else {
        flecheD.style.visibility = "visible";
    }

    let slideToShow = document.getElementById(slideActif);
    let slideToHide = document.getElementById(slideActif + 1);
    slideToShow.style.display= "block";
    slideToHide.style.display = "none";


}

if (slideActif === 1 ){
    flecheG.style.visibility = "hidden";
} else {
    flecheG.style.visibility = "visible";
}


let slideActifP = 100;
const maxSlideP = 102;
const flecheGP = document.querySelector("#gaucheP");
const flecheDP = document.querySelector("#droiteP");

document.querySelector("#droiteP").onclick = function(){

    slideActifP = slideActifP + 1;

    if(slideActifP > 100){
        flecheGP.style.visibility = "visible";
    }
    let slideToShow = document.getElementById(slideActifP);
    let slideToHide = document.getElementById(slideActifP-1);
    slideToShow.style.display= "block";
    slideToHide.style.display = "none";

    if(slideActifP >= maxSlideP){
        flecheDP.style.visibility = "hidden";
    } else {
        flecheDP.style.visibility = "visible";
    }
    if(slideActifP <= 100){
        flecheGP.style.visibility = "hidden";
    } else {
        flecheGP.style.visibility = "visible";
    }
}

document.querySelector("#gaucheP").onclick = function(){

    slideActifP = slideActifP - 1;

    if(slideActifP <= 100){
        flecheGP.style.visibility = "hidden";
    } else {
        flecheGP.style.visibility = "visible";
    }
    if(slideActifP >= maxSlide){
        flecheDP.style.visibility = "hidden";
    } else {
        flecheDP.style.visibility = "visible";
    }
    if(slideActifP<maxSlideP){
        flecheDP.style.visibility = "visible";
    }

    let slideToShow = document.getElementById(slideActifP);
    let slideToHide = document.getElementById(slideActifP + 1);
    slideToShow.style.display= "block";
    slideToHide.style.display = "none";


}


if (slideActifP === 100 ){
    flecheGP.style.visibility = "hidden";
} else {
    flecheGP.style.visibility = "visible";
}

