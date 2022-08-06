/*

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; 
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


*/


//my solution

snail = function(array) {
    let newPath = [];
    while(array.length) {
      
      //Left to right
      newPath.push(...array.shift());
      
      //Top to bottom
      for (let i = 0; i < array.length; i++) newPath.push(array[i].pop()); 
      
      //Right to left
      newPath.push(...(array.pop() || []).reverse())
      
      //Bottom to top
      for (let i = array.length-1; i >= 0; i--) newPath.push(array[i].shift());
    
    }
    return newPath; 
  }


//best practice solution

snail = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }

//alternative solution

function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }