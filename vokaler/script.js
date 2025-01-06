const app = document.getElementById("app")
let aCounter = 0
let eCounter = 0
let iCounter = 0
let oCounter = 0
let uCounter = 0
let yCounter = 0
let æCounter = 0
let øCounter = 0
let åCounter = 0


function updateView(){
 app.innerHTML = /*HTML*/`
  <div> Hvor mange vokaler er det i ordet...</div>
  <div id="wordInput"></div>
  <div id="vokalPlace"> 
  <div id="Avokal">A_vokal = ${aCounter} </div>
  <div id="Evokal">E_vokal = ${eCounter}</div>
  <div id="Ivokal">I_vokal = ${iCounter}</div>
  <div id="Ovokal">O_vokal = ${oCounter}</div>
  <div id="Uvokal">U_vokal = ${uCounter}</div>
  <div id="Yvokal">Y_vokal = ${yCounter}</div>
  <div id="Ævokal">Æ_vokal = ${æCounter}</div>
  <div id="Øvokal">Ø_vokal = ${øCounter}</div>
  <div id="Åvokal">Å_vokal = ${åCounter}</div>
  </div>
 
 `;
}

function showInput(){
    let input = document.getElementById("input");

   document.getElementById("wordInput").innerHTML = input.value;
}

function countVokaler(){
   
    
    for(let i=0; i<= input.value.length; i++){
        
    
        
    }
    showInput()
}