/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/




//my solution

function isIsogram(str){
  
    let j = 0;
    str = str.toLowerCase().split('');          //making sure isIsogram is recognized as having two 'i' letters
    
    
    for (let letter of str) {         //making sure that mo0se becomes moose
      if (str[letter] == 0) {
        str.splice(letter, 1, 'o')
      }
    }
    
    
    for (let i = 0; i < str.length; i++) {  //iteration that compares first letter with all others after it, then second letter with all others after it and so on.
      if (str.indexOf(str[i], i+1) !== -1) {  //if indexOf returns a valid value (-1 is default if nothing matches) then we can say it isn't an isogram. Return false.
        return false;
      }
    }
    
    return true;                //otherwise if no match, we know its an isogram
  }
  


//best practice solution

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;      //this is really smart. Didn't know Set objects existed
  }


//alternative solution

function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)                   //i have no idea what i'm looking at
  }