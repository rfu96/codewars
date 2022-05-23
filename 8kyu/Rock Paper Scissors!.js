/*

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/






//my solution                    

const rps = (p1, p2) => {
  
    const getMsg = (n) => `Player ${n} won!`;
    
    if (p1 === p2) {
      return 'Draw!';
    }
    
    else if (p1 == 'scissors') {
      switch (p2 == 'rock'){
        case true:
            return getMsg(2);
        case false:
            return getMsg(1);
      }
    }
    
     else if (p1 == 'rock') {
      switch (p2 == 'paper'){
        case true:
            return getMsg(2);
        case false:
            return getMsg(1);
      }
    }
    
      else if (p1 == 'paper') {
      switch (p2 == 'scissors'){
        case true:
            return getMsg(2);
        case false:
            return getMsg(1);
      }
    }
    
  };


//best practice solution

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };



//alternative solution

const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };