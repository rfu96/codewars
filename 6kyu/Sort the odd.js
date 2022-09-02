/*



*/


//my solution

function sortArray(array) {
    let evenItems;
    evenItems = isolateEven(array);
    
    array = array.filter(item => item % 2 !== 0)
      .sort((a,b) => a-b);
    
    for (item in evenItems.value) {
      array.splice(evenItems.index[item], 0, evenItems.value[item]);
    }
    
    return array;
  }
  

  
  function isolateEven(array) {
    let index = [];
    let value = [];
    array.forEach((item, ind) => {
      if (item % 2 == 0) {
        value.push(item);
        index.push(ind);
      }
    });
    
    return {index, value};
  
  }


//best practice solution

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

//alternative solution

function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }