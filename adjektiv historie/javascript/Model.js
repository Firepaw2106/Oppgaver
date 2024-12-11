
let  Adjektiv = ""


function setAdjektiv(buttonId,adjektivOrd){
    Adjektiv = adjektivOrd
    showadjective()
    removeButton(buttonId)
    return `${Adjektiv}`;
}
