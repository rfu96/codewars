/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/


//my solution

let arr = [];
let result = 0;

function zero(op){ if (op == undefined) return 0;
                   else arr.unshift(0) 
                   return op();
                  }
function one(op){ if (op == undefined) return 1;
                   else arr.unshift(1) 
                   return op();
                  }
function two(op){ if (op == undefined) return 2;
                   else arr.unshift(2) 
                   return op();
                  }
function three(op){ if (op == undefined) return 3;
                   else arr.unshift(3) 
                   return op();
                  }
function four(op){ if (op == undefined) return 4;
                   else arr.unshift(4) 
                   return op();
                  }
function five(op){ if (op == undefined) return 5;
                   else arr.unshift(5) 
                   return op();
                  }
function six(op){ if (op == undefined) return 6;
                   else arr.unshift(6) 
                   return op();
                  }
function seven(op){ if (op == undefined) return 7;
                   else arr.unshift(7) 
                   return op();
                  }
function eight(op){ if (op == undefined) return 8;
                   else arr.unshift(8) 
                   return op();
                  }
function nine(op) { if (op == undefined) return 9;
                   else arr.unshift(9) 
                   return op();
                  }

function plus(num){
                   if (arr.length == 2) {
                     result = arr[0] + arr[1];
                     arr = [];
                     return result;
                    }

                    else arr.unshift(num);
                    return plus;
                  }

function minus(num){
                   if (arr.length == 2) {
                     result = arr[0] - arr[1];
                     arr = [];
                     return result;
                    }

                    else arr.unshift(num);
                    return minus;
                  }
function times(num){
                   if (arr.length == 2) {
                     result = arr[0]*arr[1];
                     arr = [];
                     return result;
                    }

                    else arr.unshift(num);
                    return times;
                  }
function dividedBy(num){
                   if (arr.length == 2) {
                     result = Math.floor(arr[0] / arr[1]);
                     arr = [];
                     return result;
                    }

                    else arr.unshift(num);
                    return dividedBy;
                  }


//best practice solution

var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };
  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);
  
  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }


//alternative solution

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };


//another solution

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }