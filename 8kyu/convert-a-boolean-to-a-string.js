/*

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/


//my solution

function booleanToString(b){
    let booleanString = b.toString();
    return booleanString;
  }


//best practice solution

function booleanToString(b){
    return b.toString();
  }


//alternative solution

function booleanToString(b){
    return b ? 'true' : 'false';
  }