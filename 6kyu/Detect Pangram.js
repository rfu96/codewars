/*

A pangram is a sentence that contains every single letter of the alphabet at least once.
 For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z 
 at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/


//my solution

function isPangram(string){
    string = string.toUpperCase().split(' ').join('').split('')
    string = string.map((item, index) => item.charCodeAt());
    let arr = [];
    for (let i = 65; i <= 90; i++) arr.push(i);
    
    string.forEach(item => {
      if (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
      }
    });
    
    if (!arr.length) return true;
    else return false;
    
    
  }

//best practice solution

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }


//alternative solution


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
