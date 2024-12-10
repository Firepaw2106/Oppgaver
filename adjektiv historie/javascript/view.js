
const app = document.getElementById("app");

function updateView(){
 app.innerHTML = /*HTML*/`
 <div>
 <div>
    <h1> Det <div id= "firstadjektiv" class= "adjektiv">....</div> trollet.</h1>
    Det var en gang et <div id= "secendadjektiv" class= "adjektiv">....</div> troll som bodde langt ute i 
    den <div id= "thirdadjektiv" class= "adjektiv">....</div> skogen.
    Trollet hadde tre <div id= "fourthadjektiv" class= "adjektiv">....</div> hoder
    og fire <div id= "fifthadjektiv" class= "adjektiv">....</div> bein.
    Det vokste et <div id= "sixadjektiv" class= "adjektiv">....</div> tre på den 
    <div id= "seventhadjektiv" class= "adjektiv">....</div> nesa til trollet.

     
  </div>
   <button id= "button1" class= "buttons" onclick = "setAdjektiv('STOR')">Stor</button>
   <button id= "button2" class= "buttons" onclick = "setAdjektiv('LITEN')">Liten</button>
   <button id= "button3" class= "buttons" onclick = "setAdjektiv('RUND')">Rund</button>
   <button id= "button4" class= "buttons" onclick = "setAdjektiv('PRIKKETE')">Prikkete</button>
   <button id= "button5" class= "buttons" onclick = "setAdjektiv('SKREKKLIG')">Skrekklige</button>
   <button id= "button6" class= "buttons" onclick = "setAdjektiv('RYNKETE')">Rynkete</button>
   <button id= "button7" class= "buttons" onclick = "setAdjektiv('FARLIG')">Farlig</button>
   </div>`;

   
}



