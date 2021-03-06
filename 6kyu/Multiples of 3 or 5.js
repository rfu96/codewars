/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/


//my solution

function solution(number){
    let arr = [];
    for (let i = 0; i < number; i++){ 
      if (i % 3 == 0 || i % 5 == 0) arr.push(i)
    }
    
    const sum = arr.reduce((acc, item) => acc += item, 0);
    return sum;  
  }


//best practice solution

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }


//alternative solution

function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }

  //if the number is negative then return 0. Otherwise construct a new array with the numbers, then filter to retrieve the appropriate numbers and reduce
//what is the point of [...new Array(number).keys()]? Why so complicated?

//[Array(number).keys()] is equivalent of something like [arr.keys()], console logged will only return 'Array Iterator'
//[...arr.keys()] seems to access all of the index values
//recall that typically [...blah] would give you the actual value and not the index value
