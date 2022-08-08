/*

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/


//my solution

function solution(str){
    let arr=[];
    for(let i = 0; i < str.split('').length; i += 2){
    arr.push(str.slice(i, i + 2))}
  
    return arr.map(item => item.length === 1 ? item + '_' : item)
  }

//best practice solution

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

//alternative solution

function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }