/*

The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/


//my solution

function count (string) {  
    let obj = {};
    string.split('')
          .forEach(item => {
      if (!obj[item]) obj[item] = 1;
      else obj[item]++;
    })
     return obj;
  }

//best practice solution

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

//alternative solution

function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }