'use strict';
let score=20;
let high=0;
let secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);
document.querySelector('.check').addEventListener("click",guessno);
function display(message)
{
    document.querySelector(".message").textContent=message;
}
function guessno()
{

    let guess=Number(document.querySelector('.guess').value);  
if(!guess)
{
    display("no guess😒");
}
else if(guess===secretNumber)
{   document.querySelector(".number").textContent=secretNumber;
    display("Correct Number🎇🎇");
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector(".number").style.width="30rem";

    if(score>high)
     {
        high=score;
        document.querySelector(".highscore").textContent=high;
      }
}
else if(guess!==secretNumber)
{
    { if(score>=0)
        {document.querySelector(".message").textContent=guess>secretNumber?"Too high📈":"Too low📉";
         score=score-1;
        document.querySelector(".score").textContent=score;
        }
        else
        {
            display("You lost the game"); 
        }
    }
}
}

document.querySelector(".again").addEventListener("click",newgame);
function newgame()
{ 
  score=20;
  secretNumber=Math.trunc(Math.random()*20+1);
  console.log(secretNumber);
  display("Start Guessing");
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector(".number").style.width="15rem";
  document.querySelector(".number").textContent="?";
  document.querySelector('.guess').value=''; 
  document.querySelector(".score").textContent=score;
  let newguess=Number(document.querySelector('.guess').value);  
 
}