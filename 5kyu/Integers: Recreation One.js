/*

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get:
 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
 The subarrays (or tuples or Pairs) will have two elements: 
 first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".

Note
In Fortran - as in any other language - the returned string is not permitted to contain 
any redundant trailing whitespace: you can use dynamically allocated character strings.

*/


//my solution

function listSquared(m, n) {
    let validInt = {}; 
    for (let i = m; i <= n; i++) { //we will iterate over all possible values in the range between m and n
       if (findDivisors(i) !== false) {
         validInt[i] = findDivisors(i); //object receives value of squaredValue with the property of the actual valid divisor
       } 
     }
    
    let finalArray = Object.entries(validInt); //answer is correct, only issue is that the first number for each nested array is a string. We'll fix that in the next line
    return finalArray.map(item => item.map(num => parseInt(num)));
  }



  
  function findDivisors(nums) { // finds the divisors of all numbers from m to n
    let arr = [];
   
    for (let i = 1; i <= nums; i++) {
       if (nums % i == 0) arr.push(i); 
    }
    
    if (checkSquared(arr)) return checkSquared(arr); //returns squaredValue
    else return false;
  }


  
  
  function checkSquared(arr) { //checks if the array of factors will actually produce a squared number
    let squaredValue = arr.reduce((acc, item) => acc += (Math.pow(item, 2))); //we calculate the sum of the squared values
    if (Number.isInteger(Math.pow(squaredValue, 0.5)) == true) return squaredValue;
  }
    




//best practice solution

function listSquared (m, n) {
    var matches = [];
  
    for (var i = m; i <= n; ++i) {
      var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
      var ok = Number.isInteger(Math.sqrt(sum));
  
      if (ok) {
        matches.push([i, sum]);
      }
    }
  
    return matches;
  }
  
  function getDivisors (n) {
    var divisors = [];
  
    for (var i = 1; i <= n / 2; ++i) {
      if (n % i) {
        continue;
      }
  
      divisors.push(i);
    }
  
    return divisors.concat([n]);
  }

//alternative solution

function listSquared(m, n) {
    var arr = [];
    for (var i = m; i <= n; i++){
      var temp = 0;
      for (var j = 1; j <= i; j++) {
        if ( i % j == 0) temp += j*j;  
      };
      if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
    };
    return arr;
  }