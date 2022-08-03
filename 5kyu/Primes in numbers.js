/*

Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/


//my solution

function primeFactors(n){
    let countObject = {};
    let squareRoot = Math.pow(n, 0.5); //don't put this in the for expression.
                                       // Remember the for loop keeps checking the value of n after we divide by i!
    
      for (let i = 2; i <= squareRoot; i++){ 
          countObject[i] = 0;
  
          while ((n % i) == 0) {
            n /= i
            countObject[i]++
            }  
        }
    
    if (n !== 1) countObject[n] = 1;            //taking whatever prime number is left 
    
    const keys = Object.keys(countObject);
      keys.forEach(item => {
        if (countObject[item] == 0) delete countObject[item];
        if (countObject[item] > 1) countObject[item] = `(${item}**${countObject[item]})`;
        if (countObject[item] == 1) countObject[item] = `(${item})`;
      });
    
    return Object.values(countObject).join('');
  }









//best practice solution

function primeFactors(n){
    for (var i=2, res="", f; i <= n; i++) {
      f=0;
      while (n%i == 0) { f++; n/=i }
      res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
  }










//alternative solution

///// isPrime ////////////////////////////////////////////////////////////////////////
// need to make function that will return ture is num is prime
// then create function that output array which contains prime number less than num
// for ex
// if num is 86240
// store prime num until 86240
//////////////////////////////////////////////////////////////////////////////////// 

function isPrime(num){

    if (num === 2 || num === 3){
      return true;
    }
  
    if (num < 2 || num%2 === 0){
      return false;
    }
  
    for (var i = 3; i <= Math.sqrt(num); i+=2){
  
      if (num%i === 0){
        return false;
      }
  
    }
  
    return true;
  
  }
  
  //// funciton makePrimeArr /////////////////////////////////////////
  // input 
  // bigNum
  
  // output
  // arr containing prime
  
  function getAllFactorsAndSortArr(num){
  
    var arr = [];
  
    for (var i = 0; i <= Math.sqrt(num); i++){
      if (num%i === 0){
        arr.push(i);
        arr.push(num/i);
      }
    }
  
    var sortedArr =  arr.sort(function(a,b){return a-b;});
    return sortedArr.filter(function(val,idx, arr){
      if (arr.indexOf(val) === idx){
        return true;
      } 
    })
  
  }
  
  
  //// main Funtion ///////////////////////////////////////////////////////
  // primeArr will start from primeArr = [2]
  // i will store with the loop going from 3 till 86240
  // so ex for i = 3 ; i < = 86240; i++;
  
  
  
  // now I have prime arr
  
  // then I am going to go thorugh 
  // format of the output is 
  ////////////////////////////////////////////////////////////////////////
  function primeFactors(n){
    var str = "";
    var allFactors = getAllFactorsAndSortArr(n);
  
    var primeOnlyArr = allFactors.filter(function(val){
  
      return isPrime(val);
  
    })
  
    
  
    for (var i = 0; i < primeOnlyArr.length; i++){
      var primeNum = primeOnlyArr[i];
  
      str += howManyPowCanYouGoUpTo(primeNum, n)
    }
  
      return str;
  }
  
  
  //// function howManyPowCanYouGoUpTo(n, num) ///////////////////////////
  // need to write how many can power can you go up to ? with prime
  // Math.prime(2,1)
  // Math.prime(2,2)
  // Math.prime(2,3)
  // Math.prime(2,4)
  // Math.prime(2,5)
  // Math.prime(2,6) must have failed so 
  // when failed then return (2.toString() +  "**" + (i-1).toString())
  
  // if fail in (n,2)
  // then output (n.toString())
  ////////////////////////////////////////////////////////////////////////
  function howManyPowCanYouGoUpTo(n, num){
  
    var p = 1
    while (num%Math.pow(n,p) === 0){
      p++
    }
    p--
  
    if (p === 1){
      return putInParentesisToStr(n.toString());
    } else {
      return putInParentesisToStr(n.toString() + "**" + p.toString());
    } 
  
  }
  
  //// function put in parentesis (str) //////////////////////////////////
  // function put str in parentesis
  ////////////////////////////////////////////////////////////
  function putInParentesisToStr(str){
    return "(" + str + ")";
  }
  