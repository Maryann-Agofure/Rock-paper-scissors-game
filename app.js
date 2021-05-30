let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const results_p = document.querySelector(".results > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")



function getCompChoice(){
    const choices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = choices[randomNum]
    return compChoice
    
    
};

function win(userChoice, compChoice) {
  
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const border_div = document.getElementById(userChoice);
  
  const userWord = "user".fontsize(4).sub();
  const compWord = "comp".fontsize(4).sub();

  results_p.innerHTML = `${userChoice}${(userWord)} beats ${compChoice}${(compWord)}. You rock`
  border_div.classList.add("greenborder");
  setTimeout(() => {border_div.classList.remove("greenborder")
    
  }, 1000);
}
function lose(userChoice, compChoice) {
  
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const userWord = "user".fontsize(4).sub();
    const compWord = "comp".fontsize(4).sub();
    const border_div = document.getElementById(userChoice);

    results_p.innerHTML = `${userChoice}${(userWord)} loses to ${compChoice}${(compWord)} sadly`

    border_div.classList.add("yellowborder");
    setTimeout(() => {border_div.classList.remove("yellowborder")
      
    }, 1000);

}  

function draw(userChoice, compChoice) {
  console.log('its a draw');
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const userWord = "user".fontsize(4).sub();
    const compWord = "comp".fontsize(4).sub();
    const border_div = document.getElementById(userChoice);

    results_p.innerHTML = `${userChoice}${(userWord)} equals ${compChoice}${(compWord)}. A draw`

    border_div.classList.add("pinkborder");
    setTimeout(() => {border_div.classList.remove("pinkborder")
      
    }, 1000);
  
}

function game(userChoice){
    const compChoice = getCompChoice()
    console.log(compChoice)
    console.log(userChoice)
    switch(userChoice + compChoice) {
    case 'rockpaper':
    case 'rockscissors':
    case 'paperscissors':
    console.log('user wins! Yaay!')
    win(userChoice, compChoice);
    break;
    case 'paperrock':
    case 'scissorspaper':
    case 'scissorsrock':
    console.log('Computer wins this one, sadly ')
    lose(userChoice, compChoice);
    break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    console.log('a draw')
    draw(userChoice, compChoice);
    break;
    }
}
game("paper")



function main() {
paper_div.addEventListener('click', function(){
  game('paper')  
})

rock_div.addEventListener('click', function(){
  game('rock')  
})

scissors_div.addEventListener('click', function(){
 game('scissors')   
})
};
main();