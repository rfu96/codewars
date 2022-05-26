/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur:
 "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/


//my solution

var countSheep = function (num){
    let string = ""
    if (num === 0) return string;
    
    for (let i = 1; i <= num; i++) {
      string += `${i} sheep...`
    }
    
    return string;
  }

//best practice solution


var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }


//alternative solution

const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('')