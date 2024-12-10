
function setAdjektiv(adjektivOrd){
Adjektiv = adjektivOrd
showadjective()
removeButton()
return `${Adjektiv}`;

}

function showadjective(){
    if(document.getElementById("firstadjektiv").innerHTML == "...."){
        document.getElementById("firstadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("firstadjektiv").classList.remove("adjektiv")
        
    }if(document.getElementById("secendadjektiv").innerHTML == "...."){
        document.getElementById("secendadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("secendadjektiv").classList.remove("adjektiv");

    } if(document.getElementById("thirdadjektiv").innerHTML == "...."){
        document.getElementById("thirdadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("thirdadjektiv").classList.remove("adjektiv");
    } 
    if(document.getElementById("fourthadjektiv").innerHTML == "...."){
        document.getElementById("fourthadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("fourthadjektiv").classList.remove("adjektiv");
    }
    if(document.getElementById("fifthadjektiv").innerHTML == "...."){
        document.getElementById("fifthadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("fifthadjektiv").classList.remove("adjektiv");
    }
    if(document.getElementById("sixadjektiv").innerHTML == "...."){
        document.getElementById("sixadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("sixadjektivv").classList.remove("adjektiv");
    }
    if (document.getElementById("seventhadjektiv").innerHTML == "...."){
        document.getElementById("seventhadjektiv").innerHTML = `${Adjektiv}`;
        document.getElementsById("seventhadjektiv").classList.remove("adjektiv");
    }else{

    };

    }

    // function removeButton(buttonId){
    //     let button= document.getElementById(buttonId)
    //     classList.add("noDisplay")
    // }
    // removeButton("button1")
    