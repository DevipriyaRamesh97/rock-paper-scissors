let playerGame = confirm("shall we play rock, paper, or scissors");  
if(playerGame){
    let playerChoice = prompt("please enter rock, paper, or scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
   if(
         playerOne ==="rock"||
        playerOne ==="paper"||
        playerOne ==="scissors"
   ){
    let computerChoice = Math.floor(Math.random()*3+1);
    let computer = 
      computerChoice === 1
      ?"rock"
      : computerChoice === 2
      ? "paper"
      : "scissors";

      let result =
      playerOne === computer
      ? "Tie game!"
      :playerOne === "rock" && computer === "paper"
      ? `playerOne: ${playerOne}\n computer: ${computer}\n computer Wins!`
      :playerOne === "paper" && computer === "scissors"
      ? `playerOne: ${playerOne}\n computer: ${computer}\n computer Wins!`
         :playerOne === "scissors" && computer === "rock"
      ? `playerOne: ${playerOne}\n computer: ${computer}\n computer Wins!`
      :`playerOne ${playerOne}\n computer: ${computer}\n playerOne Win!`
      alert(result);
      let playAgain = confirm("paly Again?");
      playAgain ? location.reload(): alert("ok, thank for playing.")
}
   else{
    alert("you didn't enter rock, paper or scissors.")
   }
    }else{
        alert(" I guess you changeed your mind. may be next time.")
    }
}else{
    alert("ok, maybe next time.")
}