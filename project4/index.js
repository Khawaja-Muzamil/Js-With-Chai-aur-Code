let rnum=Math.floor(Math.random()*10+1);
const submit=document.querySelector("#subt");
const input=document.querySelector("#guessField");
const gusses=document.querySelector(".Guessess");
const lastresult=document.querySelector(".lastResult");
const loworhigh=document.querySelector(".low");
const startover=document.querySelector(".resultParas");

const p=document.createElement('p');

let PreviousGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit.addEventListener(('click'),(e)=>{
    e.preventDefault();
    const guess=parseInt(input.value);
    validateGuess(guess);
  })
}

//checks value is correct or valid
function validateGuess(guess){
if(isNaN(guess)){
alert("plese enter a valid number")
} else if( guess<1){
alert("plese enter a  number grater tha 1")
}else if( guess>100){
  alert("plese enter a  number less than 100")
  }else{
    PreviousGuess.push(guess)
    if(numGuess === 11){
      displayguess(guess)
      displaymsg(`game over, Random Number was ${rnum} `)
      endGame()
    }else{
      displayguess(guess)
      checkGuess(guess)
    }
  }
}

//it checks the value user has entered with the actual no.
function checkGuess(guess){
  if(guess=== rnum){
    displaymsg(`you guessed it right`)
    endGame();
  }else if(guess <rnum){
    displaymsg(`number is too low`)
  }else if(guess >rnum){
    displaymsg(`number is too high`)
  }

}
// it displays the previous and remaning gusses
function displayguess(guess){
input.value="";
gusses.innerHTML += `${guess} `
numGuess++;
lastresult.innerHTML = `${11-numGuess}`
}

//it displays the low or high message
function displaymsg(message){
loworhigh.innerHTML=`<h2>${message}</h2>`
}
//end Game
function endGame(){
input.value="";
input.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML="<h2>click to Start New Game</h2>"
startover.appendChild(p)
playGame=false;
newGame()
}

//new game
function newGame(){
 const newGameBtn= document.querySelector('.button')
newGameBtn.addEventListener(('click'),(e)=>{
  rnum=Math.floor(Math.random()*10+1);
  PreviousGuess=[];
  numGuess=1;
  gusses.innerHTML="";
lastresult.innerHTML = `${11-numGuess}`;
input.removeAttribute("disabled");
startover.removeChild(p);
playGame=true;
});
}


