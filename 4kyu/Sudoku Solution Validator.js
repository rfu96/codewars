/*

Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, 
so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, 
which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

*/


//my solution

function validSolution(board){
    if (verticalCheck(board) == false) return false
    if (horizontalCheck(board) == false) return false;
    if (gridCheck(board) == false) return false;
      return true;
  } 
    


  function verticalCheck(board) { //this checks the values on a per column basis to see if its valid
    let check = true;
    let verticalArray = [];
    
    for (let i = 0; i < board.length; i++){
      
      for (let j = 0; j < board[i].length; j++) {
        verticalArray.push(board[j][i]);
      }
      
        const verticalCheck = new Set(verticalArray);
        if (verticalCheck.size !== 9) check = false;
        verticalArray = [];
      }
    
      return check;
  }
  


  function horizontalCheck(board) { //this checks the values on a per row basis to see if its valid
    
    let numbersOnly = /[1-9]/;
    let check = true;
    
    board.forEach(row => {
      let repeatCheck = new Set();
      row.forEach(cell =>{
        repeatCheck.add(cell);
        if (cell.toString().search(numbersOnly) == -1) check = false;
    })
      if (repeatCheck.size !== 9) check = false
    });
    
    return check; 
  }
  



  function gridCheck(board) { //this checks the values on a per 3x3 grid basis to see if its valid
    
    let check = true;
    for (let h = 0; h < 3; h++) {
      
      let gridArray = [];
  
      for (let i = 0; i < board.length; i++) { //this will take cells 1-3
        for (let j = 0; j < 3; j++) { //this will iterate rows 1-3
          gridArray.push(board[i][j]);
        }
      }
        
      for (let k = 0; k < board.length; k++) {
        board[k].splice(0, 3);
      }
      
         let gridSet1 = new Set (gridArray.slice(0,9));
         let gridSet2 = new Set (gridArray.slice(9,18));
         let gridSet3 = new Set (gridArray.slice(18,27));
         if (gridSet1.size !== 9) check = false;
         if (gridSet2.size !== 9) check = false;
         if (gridSet3.size !== 9) check = false;
    }
        return check;
  }
  

//best practice solution

function equals45(n){
    return n == 45;
  }
  
  function validSolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

//alternative solution

function validSolution(board){
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
    var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
    for (var i = 0; i < 9; i++)
      if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
        return false;
    return true;
  }