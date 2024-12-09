
const app = document.getElementById("app");

function updateView(){
 app.innerHTML = /*HTML*/`
 <div>
 <div>Lorem ipsum dolor sit amet consectetur <div id= "firstadjektiv" class= "adjektiv">${Adjektiv}</div> adipisicing elit. Voluptatibus eveniet expedita,
  voluptatem accusantium <div id= "secendadjektiv" class= "adjektiv">${Adjektiv}</div> impedit fuga libero nam magni, quaerat id omnis veniam officiis voluptas
   excepturi. Ipsa dolor nulla voluptates ad!</div>
   <button id= "button1" class= "buttons" onclick = "setAdjektiv('Stor')">stor</button>
   <button id= "button2" class= "buttons" onclick = "setAdjektiv('Liten')">liten</button>
   <button id= "button3" class= "buttons"></button>
   <button id= "button4" class= "buttons"></button>
   <button id= "button5" class= "buttons"></button>
   <button id= "button6" class= "buttons"></button>
   <button id= "button7" class= "buttons"></button>
   </div>`;

   
}



