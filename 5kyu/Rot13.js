/*



*/


//my solution


function rot13(message){
    let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('')
    let converted = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('')
  
    return message.split('').map((item) => {
     
      if (original.indexOf(item) !== -1) {
        let index = original.indexOf(item);
        return converted[index];
      }
      
      else return item;
    })
      .join('');
    }


//best practice solution


function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

//alternative solution

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


//another solution

function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
  }