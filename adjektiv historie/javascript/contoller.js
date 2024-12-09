
function setAdjektiv(adjektivOrd){
Adjektiv = adjektivOrd
updateView()
return `${Adjektiv}`;

}

function showadjective(){
    document.getElementById("firstadjektiv").innerHTML = `${Adjektiv}`;
}