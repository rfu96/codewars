/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/


//my solution

function accum(s) {
	s = s.split('')
    s = s.map((item, index) => {
    
    let value='';
    
    for (let i = 0; i <= index; i++) {
     value += item.toLowerCase(); 
    }
 
    return value[0].toUpperCase() + value.substring(1);
  })
  
  
  s = s.join('-');
  return s;
}

//best practice solution


function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

//alternative solution

function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
  }
