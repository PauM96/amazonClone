
let score = JSON.parse(localStorage.getItem('score')) 
|| {
   wins: 0,
   losses: 0,
   ties: 0
};



localStorage.getItem('score');

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;



function playGame(myMove){

 const computerMove = pickComputerMove();

 let result = '';

 if(computerMove === myMove){
   result = 'Tie'
 } else {
   if(computerMove === 'Scissors'){  
     if(myMove === 'Paper') 
      result = 'You LOSE';
     if(myMove === 'Rock')
     result = 'You WIN!'
   }
   if(computerMove === 'Paper'){  
     if(myMove === 'Rock') 
      result = 'You LOSE';
     if(myMove === 'Scissors')
     result = 'You WIN!'
   }
   if(computerMove === 'Rock'){  
     if(myMove === 'Scissors') 
      result = 'You LOSE';
     if(myMove === 'Paper')
     result = 'You WIN!'
   }}

   if (result === 'You WIN!'){
     score.wins += 1
   } else if (result === 'You LOSE'){
     score.losses += 1
   } else if (result === 'Tie'){
     score.ties += 1
   }

   localStorage.setItem('score', JSON.stringify(score));
 

   document.querySelector('.js-result').innerHTML = `${result}.`;

   document.querySelector('.js-playGame').innerHTML 
   = `You <img class="move-icon" src=" images/${myMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

   document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;




}

function pickComputerMove(){

 const randomNumber = Math.random();
 let computerMove;

 if(randomNumber > 0 && randomNumber < 1 / 3){
   computerMove = 'Rock';
 }
 else if(randomNumber > 1 / 3 && randomNumber < 2 / 3){
   computerMove = 'Paper';
 }
 else 
   computerMove = 'Scissors';

 return computerMove;

} 

function resetScore(){
 score.wins = 0;
 score.ties = 0;
 score.losses = 0;
 
 localStorage.removeItem('score');

 document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;

}





