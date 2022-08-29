/*

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.
For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/


//my solution

function solution(list){
    let consecutiveCheck = new Set();
    let finalList = [];
   
     for (let i = 0; i <= list.length-1; i++){
       
       if (list[i] == (list[i+1] - 1)) {
           consecutiveCheck.add(list[i]); 
           consecutiveCheck.add(list[i+1]);
           }
     
       else{ 
             
           consecutiveCheck = Array.from(consecutiveCheck);  
         
           if (!consecutiveCheck.length) {
             finalList.push(list[i]); 
             consecutiveCheck = new Set();
           } 
         
           else if (consecutiveCheck.length == 2) {
             finalList.push(consecutiveCheck[0]);
             finalList.push(consecutiveCheck[1]); 
   //           finalList.push(list[i]);
             consecutiveCheck.length = 0;
             consecutiveCheck = new Set();
             }  
   
           else if (consecutiveCheck.length > 2) {
             let lastItem = consecutiveCheck[consecutiveCheck.length-1];
             let range = `${consecutiveCheck[0]}-${lastItem}`;
             finalList.push(range);
   //           finalList.push(list[i]);
             consecutiveCheck.length = 0;
             consecutiveCheck = new Set();
             }
         } 
     }
     
     return finalList.map(e => e.toString()).join(',');
     
     
   }


//best practice solution

function solution(individualIntegers) {
    return individualIntegers
      .reduce(splitIntoRanges, [])
      .map(convertToRange)
      .join(",");
  }
  
  function splitIntoRanges(ranges, number) {
    if (!ranges.length) {
      ranges.push([number]);
      return ranges;
    }
  
    var lastRange = ranges[ranges.length - 1];
    var lastNumber = lastRange[lastRange.length - 1];
  
    number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
    return ranges;
  }
  
  function convertToRange(range) {
    return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
  }


//alternative solution

function solution(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }