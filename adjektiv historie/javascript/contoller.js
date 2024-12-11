

function showadjective(){
      if(document.getElementById("firstadjektiv").innerHTML == "...."){
         document.getElementById("firstadjektiv").innerHTML = `${Adjektiv}`;
        
    }  else if(document.getElementById("secendadjektiv").innerHTML == "...."){
        document.getElementById("secendadjektiv").innerHTML = `${Adjektiv}`;

    }  else if(document.getElementById("thirdadjektiv").innerHTML == "...."){
        document.getElementById("thirdadjektiv").innerHTML = `${Adjektiv}`;
    } 
      else if(document.getElementById("fourthadjektiv").innerHTML == "...."){
        document.getElementById("fourthadjektiv").innerHTML = `${Adjektiv}`;
    }
      else if(document.getElementById("fifthadjektiv").innerHTML == "...."){
        document.getElementById("fifthadjektiv").innerHTML = `${Adjektiv}`;
    }
      else if(document.getElementById("sixadjektiv").innerHTML == "...."){
        document.getElementById("sixadjektiv").innerHTML = `${Adjektiv}`;
    }
      else if(document.getElementById("seventhadjektiv").innerHTML == "...."){
        document.getElementById("seventhadjektiv").innerHTML = `${Adjektiv}`;
    }else{

    };
    }

    function removeButton(buttonId){
        let button= document.getElementById(buttonId)
        button.classList.add("noDisplay")
    }

    
    
    