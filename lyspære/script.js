
let lightOn = false;
let light = document.getElementById("lys")
let showStatus =document.getElementById("lysStatusBox")
let backdrop =document.getElementById("background")

function buttonClick(){
    lightOn = !lightOn
    lightStatues()
}

function lightStatues(){

    if(lightOn == true){
        light.style.backgroundColor = 'yellow';
         showStatus.innerHTML = 'Lyset er PÅ';
         darkOrLightMode()
         

       
     }else{
         
         light.style.backgroundColor = 'grey';
         showStatus.innerHTML = 'Lyset er AV';
         darkOrLightMode()
         
     
     }

}

function darkOrLightMode(){
    if(lightOn == true){
        backdrop.style.backgroundColor ='lightgray';
        backdrop.style.color ='black';
    }else{
        backdrop.style.backgroundColor ='rgb(25, 23, 34)';
        backdrop.style.color='white';
    }
}

