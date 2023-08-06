let pbutton = document.getElementById("p-button");
let pdiv = document.getElementById("p-div");

let Imgbutton = document.getElementById("img-button");
let Imgdiv = document.getElementById("img-div");


pbutton.onclick = function(){
    Imgdiv.style["background-color"] = "black";
    Imgdiv.style["color"] = "white";


    pdiv.style["background-color"] = "white";
    pdiv.innerHTML = "";
    pdiv.style["background-color"] = "black";
    pdiv.style["color"] = "white";
    pdiv.innerHTML = "Hot chocolate is bad today";

}

Imgbutton.onclick = function(){
    pdiv.style["background-color"] = "white";
    pdiv.style["color"] = "white";

    Imgdiv.innerHTML = "<img src= Images/Pikachu.webp alt = Pikachu Image>";

}























