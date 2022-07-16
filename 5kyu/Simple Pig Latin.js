/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/


//my solution

function pigIt(str){
    str = str.split(' ');
    
    for (let i = 0; i < str.length; i++){
      let currentWord = str[i];
      if (currentWord.match(/[^A-Za-z0-9]/g)) str[i] = currentWord;
      
      else {
        let endLetter = currentWord[0]
  
        currentWord = currentWord.split('').slice(1);
        currentWord.push(endLetter + 'ay');
        currentWord = currentWord.join('');
        str[i] = currentWord;
      }
    }
    
    return str.join(' ');
  }

//best practice solution

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")       //this method is actually kind of confusing. I understand that it's by grouping, but the syntax is really throwing me off
  }

//alternative solution

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {         
      return w.slice(1) + w[0] + 'ay';
    });
  }