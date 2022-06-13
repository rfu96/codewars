/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/


//my solution

function findOutlier(integers){
    let evenArray = integers.filter(item => item % 2 == 0);
    let oddArray = integers.filter(item => item % 2 !== 0);
    
    if (evenArray.length == 1) return evenArray[0];
    if (oddArray.length == 1) return oddArray[0];
    
  }

//best practice solution

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

//alternative solution

function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
  }
  function even(num){
    return (num % 2 == 0);
  }
  function odd(num){
    return !even(num)
  }