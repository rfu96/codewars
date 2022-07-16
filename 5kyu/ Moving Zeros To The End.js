/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


*/


//my solution

function moveZeros(arr) {
    let zeroCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) zeroCount++;
    }
    
    arr = arr.filter(item => item !== 0);
    
    if (zeroCount === 0) return arr;
    
    for (let i = 0; i < zeroCount; i++) {
      arr.push(0);
    }
    
    return arr;
  }

//best practice solution


var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));    //this solution is way better
  }


//alternative solution

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});     //same solution as before
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }