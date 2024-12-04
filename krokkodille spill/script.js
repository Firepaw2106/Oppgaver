
let TallNr1 = document.getElementById("Tallplass1");
let TallNr2 = document.getElementById("Tallplass2");
let sum = document.getElementById("Poengsum")
let svarInput = document.getElementById("input")

function RandomNub(){
    TallNr1.innerHTML = Math.floor(Math.random() * 11);
    TallNr2.innerHTML = Math.floor(Math.random() * 11);
}

function compareAnswer(){

    if(TallNr1 < TallNr2 && svarInput.innerHTML = ("<"));{
        sum = +1
    }

}