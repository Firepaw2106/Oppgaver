
let TallNr1 = document.getElementById("Tallplass1");
let TallNr2 = document.getElementById("Tallplass2");
let Poengsum = document.getElementById("Poengsum");
let svarInput = document.getElementById("input");
let sum = 0;

function RandomNub(){
    TallNr1.innerHTML = Math.floor(Math.random() * 10);
    TallNr2.innerHTML = Math.floor(Math.random() * 10);
    clearInput()

    return TallNr1.innerHTML, TallNr2.innerHTML;
    
}



function compareAnswer(){
    if(TallNr1.innerHTML < TallNr2.innerHTML && svarInput.value =='<'){
        sum = sum +1
        Poengsum.innerHTML =sum

    }else if(TallNr1.innerHTML > TallNr2.innerHTML && svarInput.value =='>'){
        sum = sum +1
        Poengsum.innerHTML =sum

    }else if(TallNr1.innerHTML == TallNr2.innerHTML && svarInput.value =='='){
        sum = sum +1
        Poengsum.innerHTML =sum

    }else{
        sum =sum -1
        Poengsum.innerHTML =sum
    }
    clearInput()
    RandomNub()
}

function clearInput(){

svarInput.value="";

}