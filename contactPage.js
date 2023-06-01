const transition = document.querySelector(".transition")
setTimeout(function(){
    transition.classList.remove("active")
})


const CV = document.querySelector("#grandCV");
const image = document.querySelector("#grandeImage")

document.querySelector("#grandCV").onclick = function(event){
    if ( event.target != image){
        CV.style.display = "none";
    }
};

document.querySelector("#CV").onclick = function(){
    if (window.innerWidth >= 700) {
        CV.style.display = "flex";
    }
};

document.onkeydown = function(event) {
    if (event.keyCode === 27) {
      CV.style.display = "none";
    }
};