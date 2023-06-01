
const nav = document.querySelector("#nav");

let etat = 0;

document.querySelector("input").onclick = function(){
    etat = etat + 1;

    if(etat % 2 === 0){
        nav.style.visibility = "hidden";
    }else {
        nav.style.visibility = "visible";
    }
    console.log(etat)
}


function changeColor(elementId, backColor, color) {
	document.getElementById(elementId).style.backgroundColor = backColor;
    document.getElementById(elementId).style.color = color;
}