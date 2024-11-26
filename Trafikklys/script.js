

function setYellowLight(){

    activeLight('rød', 'grønn','gul')
}

function setGreenLight(){

    activeLight('gul', 'rød', 'grønn'
}

function activeLight(divId1, divId2, divId3,divId4){

    document.getElementById(divId1).classList.remove("active");
    document.getElementById(divId2).classList.remove("active");
    document.getElementById(divId3).classList.add("active");
    document.getElementById(divId4).classList.add("active");
    
}
function setRedLight(){
    
    activeLight('grønn','gul','rød','rød')
}