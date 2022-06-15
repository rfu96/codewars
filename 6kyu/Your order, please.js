/*



*/


//my solution

function order(words){
    if (!words) return '';
    words = words.split(' ');
    
    let newArray = [];
    for (let i = 0; i < words.length; i++) newArray.push(' ');
    
    words.forEach((item, index) =>{
      let newIndex = item.match(/[0-9]/g);
      newArray.splice(newIndex, 1, item);
    });
    
    return newArray.join(' ').trim();
    
  }

//best practice solution

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }   

//alternative solution