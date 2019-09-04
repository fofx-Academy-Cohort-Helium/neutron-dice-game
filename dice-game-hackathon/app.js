/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let initial = 0;
var global=0;
var current= 0;
var global1=document.getElementById("score-0");
var global2=document.getElementById("score-1");
var current1=document.getElementById("current-0").innerHTML;
var current2=document.getElementById("current-1");
var playerswitch=0;


function resetcurrent(){
    current=0
}


const diceSide = ["dice-1.png", "dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"]
function f(){
    var randomDice = (Math.random()*6) +1;
    var myDice = Math.floor(randomDice);
    console.log(myDice)   
   
    switch(myDice){
        case 1 :  document.getElementById('displaydice').src = diceSide[0];
        break;
        case 2 : document.getElementById('displaydice').src = diceSide[1];
        break;
        case 3 : document.getElementById('displaydice').src = diceSide[2];
        break;
        case 4 : document.getElementById('displaydice').src = diceSide[3];
        break;
        case 5 : document.getElementById('displaydice').src = diceSide[4];
        break;
        case 6 : document.getElementById('displaydice').src = diceSide[5];
    }
    
    current= current + myDice;
    console.log(current) ;
    switch (playerswitch){
        case 0:document.getElementById("current-0").innerHTML=current;
        break
        case 1:document.getElementById("current-1").innerHTML=current;
    }
    global=global + current
}

function hold(){
       
     switch (playerswitch){
        
        case 0: 
        document.getElementById("score-0").innerHTML= global
        playerswitch=1;document.getElementById("score-0").innerHTML=global;
        global=0;
        break
        case 1:
        document.getElementById("score-1").innerHTML= global
        playerswitch=0;document.getElementById("score-1").innerHTML=global;
        global=0;
    }

 
}