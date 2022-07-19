/*

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/


//my solution

function digital_root(n) {
    n = n.toString().split('').map((item) => parseInt(item));
    let accum = n.reduce((acc, item) => acc += item, 0);
    
    if (accum.toString().length !== 1) return digital_root(accum);
    else return accum;
  }


//best practice solution

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));   //recall +d attempts to turn whatever data type d is into a number
  }

//alternative solution

function digital_root(n){
    n = eval(n.toString().split('').join('+'));       //recall that eval( ) will try to evaluate the expression if it's fed a string

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}
