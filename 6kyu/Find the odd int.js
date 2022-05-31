/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/


//my solution

function findOdd(A) {
  
    for (let i = 0; i < A.length; i++) {
      let expression = A[i];
      let count = 0;
     
      A.forEach(item => {
        if (item == A[i])
        count += 1;
      })
      
      if (count % 2 !== 0) return A[i];
    }
  }

//best practice solution

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);                 //what in tarnation...after a little studying its an XOR operation. I will need to review what Array.reduce actually does

//alternative solution

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }


//another alternative I really like

  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }