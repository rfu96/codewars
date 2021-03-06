/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


*/


//my solution

function duplicateCount(text){
    text = text.toLowerCase().split('');
    let count = 0;
      
      for (i of text) {
      if (text.indexOf(i) !== text.lastIndexOf(i)) {
        count++;
        text = text.filter(item => item !== i);
      }
    }
    return count;
  }

//best practice solution

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;          //regex selects for ANY character, as long as there's at least one of them (see \1+ ). Return the length of the array
  }                                                                                               //array is basically something like ['aa', 'bb', 'cccc']

//alternative solution

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }