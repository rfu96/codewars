/*

Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/






//my solution

function opposite(number) {
    number *= -1;
    return number;
  }


//best practice solution

function opposite(number) {
    return(-number);
  }

//alternative solution

const opposite = number => -number;