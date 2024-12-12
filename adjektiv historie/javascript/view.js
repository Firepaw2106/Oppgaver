
const app = document.getElementById("app");

function updateView(){
 app.innerHTML = /*HTML*/`
 <div id="view">
    <div>
        <h1> Det <div id= "firstadjektiv" class= "adjektiv">....</div> trollet.</h1>
        <img src="https://images.fineartamerica.com/images-medium-large-5/forest-troll-theodor-kittelsen.jpg" alt="">
        
        <div id="tekst">Det var en gang et <div id= "secendadjektiv" class= "adjektiv ">....</div> troll som bodde langt ute i 
            den <div id= "thirdadjektiv" class= "adjektiv">....</div> skogen.
            Trollet hadde tre <div id= "fourthadjektiv" class= "adjektiv">....</div> hoder
            og fire <div id= "fifthadjektiv" class= "adjektiv">....</div> bein.
            Det vokste et <div id= "sixadjektiv" class= "adjektiv">....</div> tre på den 
            <div id= "seventhadjektiv" class= "adjektiv">....</div> nesa til trollet.
        </div>

      </div>
    
    <div id= "ButtonConteiner">
        <button id= "button1" class ="button" onclick = "setAdjektiv('button1','STOR')">Stor</button>
        <button id= "button2" class ="button" onclick = "setAdjektiv('button2','LITEN')">Liten</button>
        <button id= "button3" class ="button" onclick = "setAdjektiv('button3','PRIKKETE')">Prikkete</button>
        <button id= "button4" class ="button" onclick = "setAdjektiv('button4','SKREKKLIG')">Skrekklige</button>
        <button id= "button5" class ="button" onclick = "setAdjektiv('button5','RYNKETE')">Rynkete</button>
        <button id= "button6" class ="button" onclick = "setAdjektiv('button6','RUND')">Rund</button>
        <button id= "button7" class ="button" onclick = "setAdjektiv('button7','FARLIG')">Farlig</button>
    </div>

    </div>`;

   
}



