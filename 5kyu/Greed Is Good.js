/*

Greed is a dice game played with five six-sided dice. Your mission,
should you choose to accept it, is to score a throw according to these rules. 
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

*/


//my solution -- the idea was to split this up into three different components that break this into smaller problems.
                // This makes it easier to modify if we have lets say a 100 sided dice in the future

function score( dice ) { //this function generates our dice roll possibilities
    let string1 = dice.join('');
    let dieRoll = {};
     for (let i = 1; i <= 6; i++) dieRoll[i] = 0; //dieRoll.i doesn't work.
  
    match(string1, dieRoll);
    return calculation(dieRoll); //forgot to return the calculation score
  }  
  



  function match(string1, dieRoll) { // this function creates an object with values that correspond to how many dice rolls match each possibility
    
    for (let number in dieRoll) {
      let regNumber = new RegExp(`${number}`, 'g')
      let matches = string1.match(regNumber); //match in a singular string doesn't return all matched values
      if (matches == null) dieRoll[number] = 0;
      else dieRoll[number] = matches.length;  
    }
  
    return dieRoll;         //forgot to return the dieRoll
  }
  




  function calculation(dieRoll) { //this function actually calculates the final score
    let score = 0;
    
    if (dieRoll[1] >= 3) {score += 1000; dieRoll[1] -= 3;} 
    if (dieRoll[2] >= 3) {score += 200; dieRoll[2] -= 3;} 
    if (dieRoll[3] >= 3) {score += 300; dieRoll[3] -= 3;} 
    if (dieRoll[4] >= 3) {score += 400; dieRoll[4] -= 3;} 
    if (dieRoll[5] >= 3) {score += 500; dieRoll[5] -= 3;} 
    if (dieRoll[6] >= 3) {score += 600; dieRoll[6] -= 3;} 
    
    while (dieRoll[1] >= 1) {score += 100; dieRoll[1] -= 1;}
    if (dieRoll[5] >= 1) {score += 50; dieRoll[5] -= 1;}
    
    return score;
  }


//best practice solution

function score( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
  }

//alternative solution

function score( dice ) {
    var six=0, five=0, four=0, three=0, too=0, one=0;
    var i = 0;
    while (i < 5) {
      if (dice[i] == 6) { six++; }
      if (dice[i] == 5) { five++; }
      if (dice[i] == 4) { four++; }
      if (dice[i] == 3) { three++; }
      if (dice[i] == 2) { too++; }
      if (dice[i] == 1) { one++; }
      i++;
    }
    var r = 0;
    if (one > 2) { r += 1000; one -= 3;}
    if (six > 2) { r += 600; }
    if (five > 2) { r += 500; five -= 3;}
    if (four > 2) { r += 400; }
    if (three > 2) { r += 300; }
    if (too > 2) { r += 200; }
    r += one * 100;
    r += five * 50;
    return r;
  }