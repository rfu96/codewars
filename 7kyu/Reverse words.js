/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/


//my solution

function reverseWords(str) {
    str = str.split(' ');
    
    str = str.map(item => {
      return item.split('').reverse().join('');
    })
    
    return str.join(' '); 
  }
    

//best practice solution

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//alternative solution

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }