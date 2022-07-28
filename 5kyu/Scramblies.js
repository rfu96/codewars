/*

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2,
otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/


//my solution

function scramble(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    for (let char of str1) {
     obj1[char] = (obj1[char] || 0) + 1;
   }
    for (let char of str2) {
     obj2[char] = (obj2[char] || 0) + 1;
   }
    
   return (Object.entries(obj2).every(([key, value]) => obj1[key] >= value));
  
    
  }

//best practice solution

function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
  }


//alternative solution

const scramble = (str1, str2) =>
  [...str2].every(val => str2.split(val).length <= str1.split(val).length);