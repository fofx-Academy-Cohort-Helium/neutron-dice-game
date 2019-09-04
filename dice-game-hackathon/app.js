/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var imgArray = new Array(6);

// imgArray[0] = new Image();
// imgArray[0].src = 'dice-1.png';

// imgArray[1] = new Image();
// imgArray[1].src = 'dice-2.png';

// imgArray[2] = new Image();
// imgArray[2].src = 'dice-3.png';

// imgArray[3] = new Image();
// imgArray[3].src = 'dice-4.png';

// imgArray[4] = new Image();
// imgArray[4].src = 'dice-5.png';

// imgArray[5] = new Image();
// imgArray[5].src = 'dice-6.png';

// function option(x){
//     document.getElementById('displaydice').src = 
//    }
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
}
