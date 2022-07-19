/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/


//my solution

function solution(string) {
    let newString = "";
  for (letter of string) {
    if (letter == letter.toUpperCase()) {
      newString += " ";
      newString += letter;
    } else {
      newString += letter;
    }
  } 
  return newString
}


//best practice solution


function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));      //replaces the capital letter with the capital letter + a space before. $1 refers to the first sorting group
  
  }

//alternative solution

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el                             //same method as above without using regex
      }
      return el
    })
    return string.join('')
  }