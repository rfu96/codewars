/*

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/


//my solution

function nextBigger(n){
    //   if (String(n).split('').length == 1) return -1;
      let originalVal = n;
      let numberArray = n.toString().split('');
      let finishedArray = swap(numberArray);
      
      let modifiedVal = +(finishedArray.join(''))
      
      if (modifiedVal == originalVal) return -1
      else return modifiedVal;
      
    }
      
    function swap(numberArray) {
      
      for (let i = numberArray.length-1; i >= 0; i--) {
        let currentVal = numberArray[i];
        let nextVal = numberArray[i-1];
    
        if (currentVal > nextVal) {
          let lowestArray = numberArray.slice(i,).sort().filter(e => e > numberArray[i-1]); 
          let lowestValue = lowestArray[0]; //the lowest value greater than the pivot
          let lowestIndex = numberArray.lastIndexOf(lowestValue) //finding the original index of that lowest value so we can do an exchange
          
          let iValue = numberArray[i-1];
          numberArray[i-1] = lowestValue;
          numberArray[lowestIndex] = iValue;
          
          
          let leftArray = numberArray.slice(0, i);
          let rightArray = numberArray.slice(i,).sort();
          return leftArray.concat(rightArray);
         }
      }
      
      return numberArray;
      
    }
      

//best practice solution

function nextBigger(n){
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num;
  }

//alternative solution

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}