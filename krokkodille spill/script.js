
let TallNr1 = document.getElementById("Tallplass1").innerHTML;
let TallNr2 = document.getElementById("Tallplass2").innerHTML;
let sum = document.getElementById("Poengsum").innerHTML
let svarInput = document.getElementById("input").innerHTML

function RandomNub(){
    document.getElementById("Tallplass1").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("Tallplass2").innerHTML = Math.floor(Math.random()*11);
}

function CheckAnswer(){

    if(TallNr1 < TallNr2 && svarInput = '<'){
        sum = +1
    }

}