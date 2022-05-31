/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


*/


//my solution

function arrayDiff(a, b) {
    if (!a.length) return [];
      
    for (let i = 0; i <= b.length; i++) {
    
      a = a.filter(item => {
      if (item !== b[i]) return item })
      
   }
    
    return a;
  }

//best practice solution

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

//alternative solution

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }