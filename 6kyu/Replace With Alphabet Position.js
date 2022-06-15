/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/


//my solution

function alphabetPosition(text) {
    text = text.toLowerCase().split('').filter(item => (/[a-z]/g).test(item));
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    text = text.map(item => {
      
      if (alphabetArray.includes(item)) { 
        return (alphabetArray.indexOf(item) + 1); 
      }
      
   });
    
    return text.join(' ');
    
  }

//best practice solution

function alphabetPosition(text) {
    return text
      .toUpperCase()                        //makes it so that charcodes from A-Z start from 65 onwards. a-z is much higher.
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)     //charCodeAt retrieves the UTF-16 code number. Subtract 64 since A starts at 65
      .join(' ');
  }


//alternative solution

function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;                            //basically filtering for letters in 'text' that are found in the alphabet. Return > -1 so that only true values are returned.
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )      //from the values that returned true, we want to add one
    .join(' ')
  }