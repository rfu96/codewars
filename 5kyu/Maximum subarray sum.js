/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/


//my first solution -- brute force O(n^2) time complexity

var maxSequence = function(arr){
    if (!arr.length || !arr.filter(item => item > 0).length) return 0;
    let sumArray = [];
    sumArray.push(arr[arr.length-1]); //the weirdest thing...when it comes to the last element 
                                      //in my arr.slice.reduce (so when i = arr.length - 1) I can console.log 
                                      //the acc value BUT i cannot push it to sumArray. So strange.
    for (let i = 0; i < arr.length; i++) {
        arr.slice(i).reduce((acc, item) => {
        sumArray.push(acc);
        sumArray.push(acc + item);
        return acc + item });
    }           
    
    return Math.max(...sumArray);
  }


//my second solution after learning Kadane's algo -- O(n) time complexity

var maxSequence = function(arr){
    //redoing this with Kadane's algorithm
    if (!arr.length) return 0;
    
    let globalMax = arr[0];
    let currentMax = arr[0];
    
    for (let i = 1; i < arr.length; i++){
      currentMax = Math.max(arr[i], currentMax + arr[i]);
      if (currentMax > globalMax) globalMax = currentMax;
    }
    
    if (globalMax < 0) return 0;
    return globalMax;
  }

//best practice solution


var maxSequence = function(arr){                    //another variation on Kadane
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }


//alternative solution

var maxSequence = function(arr){                        //cleaner version of Kadane
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}