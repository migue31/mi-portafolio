
let miniGreen = document.getElementById("miniGreen");
let miniLightPink = document.getElementById("miniLightPink");
let miniDarkPink = document.getElementById("miniDarkPink");
let mainCircle = document.getElementById("mainCircle");

miniGreen.addEventListener("mouseover", function(){
   mainCircle.classList.add("main-circle-green");
   mainCircle.classList.remove("main-circle-light-pink");
   mainCircle.classList.remove("main-circle-dark-pink");
   iceStarbucks.src = ""
});
miniLightPink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.add("main-circle-light-pink");
    mainCircle.classList.remove("main-circle-dark-pink");
});
miniDarkPink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.remove("main-circle-light-pink");
    mainCircle.classList.add("main-circle-dark-pink");
});